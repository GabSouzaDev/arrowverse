import { defineConfig } from "drizzle-kit";

const DATABASE_URL = process.env.DATABASE_URL || 
  `postgresql://postgres:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpZnFobnR2b3didnd3Z3JsbmduIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NjM0Mzg3MSwiZXhwIjoyMDcxOTE5ODcxfQ.vJ_C3qd5KFVI5EuSBZxJ7rF9KmhRisr4YUwXEA0-FUo@db.iifqhntvowbvwwgrlngn.supabase.co:5432/postgres`;

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql", 
  dbCredentials: {
    url: DATABASE_URL,
  },
});
