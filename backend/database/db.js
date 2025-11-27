/*
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function getDBConnection() {
  // Always points to THIS folder (database/)
  const dbPath = path.join(__dirname, 'database.db');

  const db = await open({
    filename: dbPath,
    driver: sqlite3.Database,
  });

  console.log('📂 Connected to:', dbPath);
  return db;
}
*/

// database/db.js
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false   // Required for Render's free Postgres
  }
});

export const getDBConnection = async () => {
  return pool;
};

// Optional: graceful shutdown
process.on('SIGINT', async () => {
  await pool.end();
  process.exit(0);
});