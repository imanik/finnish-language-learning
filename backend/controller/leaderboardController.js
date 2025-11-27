
import { getDBConnection } from "../database/db.js";


// Add a new record (accepts user_id if provided)
export async function leaderboardEntry(req, res) {
  const db = await getDBConnection();

  try {
    const { topic = "Greetings", score = 0, time = 0, correct = 0 } = req.body;

    // Get current user from session
    const currentUserId = req.session.userId;
    if (!currentUserId) return res.status(401).json({ error: "Not authenticated" });

    // Check user exists
    const user = await db.get(`SELECT id FROM users WHERE id = ?`, [currentUserId]);
    if (!user) return res.status(400).json({ error: "User does not exist" });

    const today = new Date().toISOString().split("T")[0];

    await db.run(
      `INSERT INTO leaderboard (user_id, date, topic, score, time, correct)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [currentUserId, today, topic, score, time, correct]
    );

    res.json({ success: true, message: "✅ Leaderboard entry added!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to insert leaderboard entry" });
  }
}

// controller/leaderboardController.js
export async function leaderboardData(req, res) {
  const db = await getDBConnection();
  try {
    const currentUserId = req.session.userId || null;

    const rows = await db.all(`
      SELECT u.id as user_id, u.username, l.topic, l.score, l.time, l.correct, l.date
      FROM leaderboard l
      JOIN users u ON l.user_id = u.id
      WHERE l.score > 0
      ORDER BY l.score DESC, l.time ASC
    `);

    const ranked = rows.map((r, i) => ({ ...r, rank: i + 1 }));
    const topFive = ranked.slice(0, 5);
    const user = ranked.find((r) => r.user_id === currentUserId) || null;

    res.json({ topFive, user });
  } catch (err) {
    console.error("Leaderboard fetch error:", err);
    res.status(500).json({ error: "Failed to load leaderboard" });
  }
}

/*
export async function leaderboardData(req, res) {
  const db = await getDBConnection();

  try {
 //   const currentUserId = req.session.userId || null;
     const currentUserId = req.session?.userId || null;

    // Fetch leaderboard data (only real users)
    const rows = await db.all(`
      SELECT 
        u.id as user_id,
        u.username, 
        l.topic, 
        l.score, 
        l.time, 
        l.correct,
        l.date
      FROM leaderboard l
      JOIN users u ON l.user_id = u.id
      WHERE l.score > 0
      ORDER BY l.score DESC, l.time ASC
    `);

    const ranked = rows.map((r, i) => ({ ...r, rank: i + 1 }));
    const topFive = ranked.slice(0, 5);
    const user = ranked.find((r) => r.user_id === currentUserId) || null;

    res.json({ topFive, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load leaderboard" });
  }
}

*/
// async (req, res) => {
  
export async function leaderboardUpdate(req, res) {
  const db = await getDBConnection();
  const { topic, progress } = req.body;
  const userId = req.session.userId;

  if (!userId) return res.status(401).json({ error: "Not logged in" });

  // Check if an entry already exists for this user/topic
  const latest = await db.get(
    `SELECT id FROM leaderboard WHERE user_id = ? AND topic = ? ORDER BY date DESC LIMIT 1`,
    [userId, topic]
  );

  if (!latest) {
    // 🆕 Insert new leaderboard entry
    await db.run(
      `INSERT INTO leaderboard (user_id, topic, correct, score, date)
       VALUES (?, ?, ?, ?, datetime('now'))`,
      [userId, topic, progress, progress * 10]
    );

    return res.json({ success: true, message: "New leaderboard entry created" });
  }

  // ✅ Otherwise, update existing entry
  await db.run(
    `UPDATE leaderboard SET correct = ?, score = ? WHERE id = ?`,
    [progress, progress * 10, latest.id]
  );

  res.json({ success: true, message: "Leaderboard updated" });
}



