import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Table to store user progress for the Arrowverse checklist
export const userProgress = pgTable("user_progress", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull(),
  episodeId: varchar("episode_id").notNull(),
  watched: boolean("watched").notNull().default(false),
  watchedAt: timestamp("watched_at").defaultNow(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Summary table for user progress statistics
export const progressSummary = pgTable("progress_summary", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().unique(),
  totalWatched: integer("total_watched").notNull().default(0),
  totalEpisodes: integer("total_episodes").notNull().default(0),
  crossoversWatched: integer("crossovers_watched").notNull().default(0),
  currentStreak: integer("current_streak").notNull().default(0),
  lastUpdated: timestamp("last_updated").defaultNow(),
});

export const insertUserProgressSchema = createInsertSchema(userProgress).pick({
  userId: true,
  episodeId: true,
  watched: true,
});

export const insertProgressSummarySchema = createInsertSchema(progressSummary).pick({
  userId: true,
  totalWatched: true,
  totalEpisodes: true,
  crossoversWatched: true,
  currentStreak: true,
});

export type InsertUserProgress = z.infer<typeof insertUserProgressSchema>;
export type UserProgress = typeof userProgress.$inferSelect;
export type InsertProgressSummary = z.infer<typeof insertProgressSummarySchema>;
export type ProgressSummary = typeof progressSummary.$inferSelect;
