import { getDBConnection } from "./db.js";

async function createTable() {

    
    const db = await getDBConnection()
    
    console.log('Here create table', db)
    try {

        await db.exec(`CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        username TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`)


        // -- users: add role and preferences (if you already have users, use ALTER TABLE to add columns)
await db.exec(`ALTER TABLE users ADD COLUMN role TEXT DEFAULT 'learner'`)     
await db.exec(`ALTER TABLE users ADD COLUMN location TEXT DEFAULT NULL`)
await db.exec(`ALTER TABLE users ADD COLUMN languages TEXT DEFAULT NULL`)      
await db.exec(`ALTER TABLE users ADD COLUMN settings TEXT DEFAULT NULL`)      

// -- Meet requests (posted by learners)
await db.exec(`CREATE TABLE IF NOT EXISTS meet_requests (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  learner_id INTEGER NOT NULL,
  title TEXT,                       -- optional short titled
  location TEXT,                    -- free text (city/cafe/coords)
  place_type TEXT,                  -- 'cafe' | 'library' | 'online' | 'other'
  date TEXT,                        -- ISO date 'YYYY-MM-DD'
  time TEXT,                        -- 'HH:MM'
  duration_minutes INTEGER,
  skill_level TEXT,                 -- 'beginner'|'intermediate'|'fluent'
  common_language TEXT,             -- e.g. 'English'
  offer TEXT,                       -- e.g. 'coffee' or 'gift voucher' or free-text
  extra TEXT,                       -- free-text notes
  status TEXT DEFAULT 'open',       -- 'open'|'confirmed'|'closed'|'cancelled'
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (learner_id) REFERENCES users(id)
)`)

// -- Applications by assistants
await db.exec(`CREATE TABLE IF NOT EXISTS applications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  request_id INTEGER NOT NULL,
  assistant_id INTEGER NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending',  -- 'pending'|'accepted'|'rejected'  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (request_id) REFERENCES meet_requests(id),
  FOREIGN KEY (assistant_id) REFERENCES users(id)
)`)

// -- Optionally keep a small offers table (normalized) if you want structured offers
await db.exec(`CREATE TABLE IF NOT EXISTS offers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT UNIQUE,                 -- e.g. 'coffee', 'beer', 'gift_voucher'
  description TEXT
)`)

// -- Reviews after meeting
await db.exec(`CREATE TABLE IF NOT EXISTS reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  request_id INTEGER,
  reviewer_id INTEGER,
  reviewee_id INTEGER,
  rating INTEGER,                   
  comment TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (request_id) REFERENCES meet_requests(id),
  FOREIGN KEY (reviewer_id) REFERENCES users(id),
  FOREIGN KEY (reviewee_id) REFERENCES users(id)
)`)

// -- Reviews after meeting
await db.exec(`
CREATE TABLE IF NOT EXISTS leaderboard (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,                     -- Links to users.id
  date TEXT NOT NULL,                  -- e.g. '2025-10-13'
  topic TEXT,                          -- e.g. 'Food', 'Greetings'
  score INTEGER,                       -- e.g. 780
  time INTEGER,                        -- seconds taken
  correct INTEGER,                     -- number of correct answers
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
`);


     

         await db.close()
        console.log('Table products created')

    }catch(err){

        console.error("Error creating users table:", err)

    }
}



 createTable()