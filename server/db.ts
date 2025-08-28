import { createClient } from '@supabase/supabase-js';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from "@shared/schema";

// Configuração Supabase
const supabaseUrl = process.env.SUPABASE_URL || 'https://iifqhntvowbvwwgrlngn.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpZnFobnR2b3didnd3Z3JsbmduIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NjM0Mzg3MSwiZXhwIjoyMDcxOTE5ODcxfQ.vJ_C3qd5KFVI5EuSBZxJ7rF9KmhRisr4YUwXEA0-FUo';

export const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

// Para usar com Drizzle, vamos usar uma conexão postgres direta simples  
// usando as credenciais do Supabase de forma mais direta
const connectionString = `postgresql://postgres:${supabaseServiceKey}@db.iifqhntvowbvwwgrlngn.supabase.co:5432/postgres`;

let db: any;
try {
  const sql = postgres(connectionString, {
    ssl: 'require',
    connect_timeout: 10,
    idle_timeout: 20,
    max: 1
  });
  db = drizzle(sql, { schema });
} catch (error) {
  console.error('Erro ao conectar com o banco:', error);
  throw error;
}

export { db };