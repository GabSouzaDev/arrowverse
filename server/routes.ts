import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserProgressSchema, insertProgressSummarySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Simple user session management - in a real app you'd use proper auth
  let currentUserId = "default-user";

  // Get user progress
  app.get("/api/progress", async (req, res) => {
    try {
      const [progress, summary] = await Promise.all([
        storage.getUserProgress(currentUserId),
        storage.getProgressSummary(currentUserId)
      ]);
      
      // Convert progress array to watched episodes object
      const watchedEpisodes: Record<string, boolean> = {};
      progress.forEach(p => {
        watchedEpisodes[p.episodeId] = p.watched;
      });
      
      res.json({
        watchedEpisodes,
        summary: summary || {
          totalWatched: 0,
          totalEpisodes: 0,
          crossoversWatched: 0,
          currentStreak: 0,
          lastUpdated: new Date().toISOString()
        }
      });
    } catch (error) {
      console.error("Error fetching progress:", error);
      res.status(500).json({ message: "Failed to fetch progress" });
    }
  });

  // Update episode progress
  app.post("/api/progress/episode", async (req, res) => {
    try {
      const { episodeId, watched } = req.body;
      
      if (!episodeId || typeof watched !== "boolean") {
        return res.status(400).json({ message: "episodeId and watched status are required" });
      }
      
      const progress = await storage.updateEpisodeProgress(currentUserId, episodeId, watched);
      res.json(progress);
    } catch (error) {
      console.error("Error updating episode progress:", error);
      res.status(500).json({ message: "Failed to update episode progress" });
    }
  });

  // Update progress summary
  app.post("/api/progress/summary", async (req, res) => {
    try {
      const summaryData = insertProgressSummarySchema.parse({
        userId: currentUserId,
        ...req.body
      });
      
      const summary = await storage.updateProgressSummary(currentUserId, summaryData);
      res.json(summary);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid summary data", errors: error.errors });
      }
      console.error("Error updating progress summary:", error);
      res.status(500).json({ message: "Failed to update progress summary" });
    }
  });

  // Reset all progress
  app.delete("/api/progress", async (req, res) => {
    try {
      // Get all user progress and update to unwatched
      const allProgress = await storage.getUserProgress(currentUserId);
      
      await Promise.all([
        // Mark all episodes as unwatched
        ...allProgress.map(p => 
          storage.updateEpisodeProgress(currentUserId, p.episodeId, false)
        ),
        // Reset summary
        storage.updateProgressSummary(currentUserId, {
          totalWatched: 0,
          crossoversWatched: 0,
          currentStreak: 0
        })
      ]);
      
      res.json({ message: "Progress reset successfully" });
    } catch (error) {
      console.error("Error resetting progress:", error);
      res.status(500).json({ message: "Failed to reset progress" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
