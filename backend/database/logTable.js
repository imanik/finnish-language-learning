// database/viewTables.js
import { getDBConnection } from "./db.js";

async function viewTables() {
  const db = await getDBConnection();

  console.log("📂 Database connected!");

  // 🧍 View all users
  const users = await db.all(`SELECT * FROM users`);
  console.log("👥 Users table:");
  console.table(users);

  // 🏆 View all leaderboard entries
  const leaderboard = await db.all(`SELECT * FROM leaderboard`);
  console.log("🏆 Leaderboard table:");
  console.table(leaderboard);

  await db.close();
  console.log("✅ Connection closed.");
}

viewTables().catch(err => {
  console.error("❌ Error viewing tables:", err);
});
