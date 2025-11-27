// controller/leaderboardController.js
import { getDBConnection } from "../database/db.js";

export async function leaderboardEntry(req, res) {
  const db = await getDBConnection();
  try {
    const { topic = "Greetings", score = 0, time = 0, correct = 0 } = req.body;
    const currentUserId = req.session.userId;
    if (!currentUserId) return res.status(401).json({ error: "Not authenticated" });

    const user = await db.query("SELECT id FROM users WHERE id = $1", [currentUserId]);
    if (!user.rows[0]) return res.status(400).json({ error: "User does not exist" });

    const today = new Date().toISOString().split('T')[0];
    await db.query(`
      INSERT INTO leaderboard (user_id, date, topic, score, time, correct)
      VALUES ($1, $2, $3, $4, $5, $6)
    `, [currentUserId, today, topic, score, time, correct]);

    res.json({ success: true, message: "✅ Leaderboard entry added!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to insert leaderboard entry" });
  }
}

export async function leaderboardData(req, res) {
  const db = await getDBConnection();
  try {
    const currentUserId = req.session.userId || null;

    const rows = await db.query(`
      SELECT u.id as user_id, u.username, l.topic, l.score, l.time, l.correct, l.date
      FROM leaderboard l
      JOIN users u ON l.user_id = u.id
      WHERE l.score > 0
      ORDER BY l.score DESC, l.time ASC
    `);

    const ranked = rows.rows.map((r, i) => ({ ...r, rank: i + 1 }));
    const topFive = ranked.slice(0, 5);
    const user = ranked.find((r) => r.user_id === currentUserId) || null;

    res.json({ topFive, user });
  } catch (err) {
    console.error("Leaderboard fetch error:", err);
    res.status(500).json({ error: "Failed to load leaderboard" });
  }
}

export async function leaderboardUpdate(req, res) {
  const db = await getDBConnection();
  const { topic, progress } = req.body;
  const userId = req.session.userId;

  if (!userId) return res.status(401).json({ error: "Not logged in" });

  try {
    const latest = await db.query(`
      SELECT id FROM leaderboard WHERE user_id = $1 AND topic = $2 ORDER BY date DESC LIMIT 1
    `, [userId, topic]);

    if (!latest.rows[0]) {
      // Insert new entry
      await db.query(`
        INSERT INTO leaderboard (user_id, topic, correct, score, date)
        VALUES ($1, $2, $3, $4, CURRENT_DATE)
      `, [userId, topic, progress, progress * 10]);
      return res.json({ success: true, message: "New leaderboard entry created" });
    }

    // Update existing entry
    await db.query(`
      UPDATE leaderboard SET correct = $1, score = $2 WHERE id = $3
    `, [progress, progress * 10, latest.rows[0].id]);

    res.json({ success: true, message: "Leaderboard updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update leaderboard" });
  }
}