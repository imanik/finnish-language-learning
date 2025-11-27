// createTables.js (new file or update your existing createTable)
import { getDBConnection } from "./db.js";

async function createTables() {
  const db = await getDBConnection();
  
  try {
    // Create users table
    await db.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        username TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        role TEXT DEFAULT 'learner',
        location TEXT,
        languages TEXT,
        settings TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create leaderboard table
    await db.query(`
      CREATE TABLE IF NOT EXISTS leaderboard (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        date DATE NOT NULL,
        topic TEXT NOT NULL,
        score INTEGER NOT NULL,
        time INTEGER NOT NULL,
        correct INTEGER NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create indexes for performance
    await db.query("CREATE INDEX IF NOT EXISTS idx_leaderboard_user_date ON leaderboard(user_id, date)");
    await db.query("CREATE INDEX IF NOT EXISTS idx_leaderboard_score ON leaderboard(score DESC)");

    console.log('✅ PostgreSQL tables created successfully!');
  } catch (err) {
    console.error("❌ Error creating tables:", err);
  }
}

export default createTables;