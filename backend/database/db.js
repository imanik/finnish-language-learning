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





// import sqlite3 from 'sqlite3' 
// import {open} from 'sqlite'
// import path from 'node:path'


// export async function  getDBConnection() {

//   const dbPath = path.join(process.cwd(), 'database', 'database.db')

//   const db = await open({
//     filename: dbPath,
//     driver:sqlite3.Database
//   })

  
//   console.log("📂 Connected to:", dbPath)

//   return db
  
// }

// curl -X POST http://localhost:5000/api/leaderboard/entry   -H "Content-Type: application/json"   -d '{"date":"2025-10-13","topic":"Greetings","score":800,"time":32,"correct":9}'
// {"error":"Failed to save leaderboard entry"}
// curl -X POST http://localhost:5000/api/auth/register   -H "Content-Type: application/json"   -d '{"name":"tutul","username":"Tut","email":"tutul@gmail.com","password":"987654321"}'
// {"error":"Failed to save user entry"}
