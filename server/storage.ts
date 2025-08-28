import { 
  type User, 
  type InsertUser,
  type UserProgress,
  type InsertUserProgress,
  type ProgressSummary,
  type InsertProgressSummary,
  users,
  userProgress,
  progressSummary
} from "@shared/schema";
import { db } from "./db";
import { eq, and } from "drizzle-orm";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Progress management
  getUserProgress(userId: string): Promise<UserProgress[]>;
  getProgressSummary(userId: string): Promise<ProgressSummary | undefined>;
  updateEpisodeProgress(userId: string, episodeId: string, watched: boolean): Promise<UserProgress>;
  updateProgressSummary(userId: string, summary: Partial<InsertProgressSummary>): Promise<ProgressSummary>;
  getEpisodeProgress(userId: string, episodeId: string): Promise<UserProgress | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private progress: Map<string, UserProgress[]>;
  private summaries: Map<string, ProgressSummary>;

  constructor() {
    this.users = new Map();
    this.progress = new Map();
    this.summaries = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getUserProgress(userId: string): Promise<UserProgress[]> {
    return this.progress.get(userId) || [];
  }

  async getProgressSummary(userId: string): Promise<ProgressSummary | undefined> {
    return this.summaries.get(userId);
  }

  async getEpisodeProgress(userId: string, episodeId: string): Promise<UserProgress | undefined> {
    const userProgress = this.progress.get(userId) || [];
    return userProgress.find(p => p.episodeId === episodeId);
  }

  async updateEpisodeProgress(userId: string, episodeId: string, watched: boolean): Promise<UserProgress> {
    const userProgress = this.progress.get(userId) || [];
    const existingIndex = userProgress.findIndex(p => p.episodeId === episodeId);
    
    if (existingIndex >= 0) {
      userProgress[existingIndex] = {
        ...userProgress[existingIndex],
        watched,
        watchedAt: watched ? new Date() : null,
        updatedAt: new Date()
      };
    } else {
      const newProgress: UserProgress = {
        id: randomUUID(),
        userId,
        episodeId,
        watched,
        watchedAt: watched ? new Date() : null,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      userProgress.push(newProgress);
    }
    
    this.progress.set(userId, userProgress);
    return userProgress.find(p => p.episodeId === episodeId)!;
  }

  async updateProgressSummary(userId: string, summary: Partial<InsertProgressSummary>): Promise<ProgressSummary> {
    const existing = this.summaries.get(userId);
    const updated: ProgressSummary = {
      id: existing?.id || randomUUID(),
      userId,
      totalWatched: summary.totalWatched || existing?.totalWatched || 0,
      totalEpisodes: summary.totalEpisodes || existing?.totalEpisodes || 0,
      crossoversWatched: summary.crossoversWatched || existing?.crossoversWatched || 0,
      currentStreak: summary.currentStreak || existing?.currentStreak || 0,
      lastUpdated: new Date()
    };
    
    this.summaries.set(userId, updated);
    return updated;
  }
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async getUserProgress(userId: string): Promise<UserProgress[]> {
    return await db
      .select()
      .from(userProgress)
      .where(eq(userProgress.userId, userId));
  }

  async getProgressSummary(userId: string): Promise<ProgressSummary | undefined> {
    const [summary] = await db
      .select()
      .from(progressSummary)
      .where(eq(progressSummary.userId, userId));
    return summary || undefined;
  }

  async getEpisodeProgress(userId: string, episodeId: string): Promise<UserProgress | undefined> {
    const [progress] = await db
      .select()
      .from(userProgress)
      .where(and(
        eq(userProgress.userId, userId),
        eq(userProgress.episodeId, episodeId)
      ));
    return progress || undefined;
  }

  async updateEpisodeProgress(userId: string, episodeId: string, watched: boolean): Promise<UserProgress> {
    // Check if progress already exists
    const existing = await this.getEpisodeProgress(userId, episodeId);
    
    if (existing) {
      // Update existing progress
      const [updated] = await db
        .update(userProgress)
        .set({ 
          watched, 
          watchedAt: watched ? new Date() : null,
          updatedAt: new Date()
        })
        .where(and(
          eq(userProgress.userId, userId),
          eq(userProgress.episodeId, episodeId)
        ))
        .returning();
      return updated;
    } else {
      // Create new progress entry
      const [created] = await db
        .insert(userProgress)
        .values({
          userId,
          episodeId,
          watched,
          watchedAt: watched ? new Date() : null
        })
        .returning();
      return created;
    }
  }

  async updateProgressSummary(userId: string, summary: Partial<InsertProgressSummary>): Promise<ProgressSummary> {
    const existing = await this.getProgressSummary(userId);
    
    if (existing) {
      const [updated] = await db
        .update(progressSummary)
        .set({
          ...summary,
          lastUpdated: new Date()
        })
        .where(eq(progressSummary.userId, userId))
        .returning();
      return updated;
    } else {
      const [created] = await db
        .insert(progressSummary)
        .values({
          userId,
          ...summary
        })
        .returning();
      return created;
    }
  }
}

export const storage = new MemStorage();
