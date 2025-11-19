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


