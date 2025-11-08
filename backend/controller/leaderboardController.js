import { getDBConnection } from '../database/db.js';

// Add a new record (accepts user_id if provided)
export async function leaderboardEntry(req, res) {
  const db = await getDBConnection();

  try {
    const { user_id, topic = "Greetings", score = 0, time = 0, correct = 0 } = req.body;
    const today = new Date().toISOString().split("T")[0];

    let userIdToUse = user_id;

    // 🧩 If no user_id was provided, fallback to Guest
    if (!userIdToUse) {
      let guest = await db.get(`SELECT * FROM users WHERE username = ?`, ["Guest"]);
      if (!guest) {
        await db.run(`INSERT INTO users (username, email) VALUES (?, ?)`, ["Guest", "guest@example.com"]);
        guest = await db.get(`SELECT * FROM users WHERE username = ?`, ["Guest"]);
      }
      userIdToUse = guest.id;
    }

    // 🧠 Make sure user_id exists in users table before inserting
    const existingUser = await db.get(`SELECT id FROM users WHERE id = ?`, [userIdToUse]);
    if (!existingUser) {
      return res.status(400).json({ error: "User does not exist!" });
    }

    // 🏁 Insert into leaderboard
    await db.run(
      `
      INSERT INTO leaderboard (user_id, date, topic, score, time, correct)
      VALUES (?, ?, ?, ?, ?, ?)
    `,
      [userIdToUse, today, topic, score, time, correct]
    );

    res.json({ success: true, message: "✅ Leaderboard entry added!" });
  } catch (err) {
    console.error("Error inserting leaderboard:", err);
    res.status(500).json({ error: "Failed to insert leaderboard entry" });
  }
}

// Fetch leaderboard — sorted by top score
export async function leaderboardData(req, res) {
  const db = await getDBConnection();

  try {
    // Get all leaderboard rows
    const rows = await db.all(`
      SELECT 
        u.username, 
        l.topic, 
        l.score, 
        l.time, 
        l.correct, 
        l.user_id,
        l.date
      FROM leaderboard l
      LEFT JOIN users u ON l.user_id = u.id
      WHERE l.score > 0
      ORDER BY l.score DESC, l.time ASC
    `);

    if (!rows || rows.length === 0) {
      return res.json({ topFive: [], user: null });
    }

    // Add ranks dynamically
    const ranked = rows.map((r, i) => ({
      ...r,
      rank: i + 1,
    }));

    // Top 5 only
    const topFive = ranked.slice(0, 5);

    // Example: identify the current user (replace 3 with logged-in user_id)
    const currentUserId = Number(req.query.user_id) || 3;
    const user = ranked.find((r) => r.user_id === currentUserId) || null;

    res.json({ topFive, user });
  } catch (err) {
    console.error("Error fetching leaderboard:", err);
    res.status(500).json({ error: "Failed to load leaderboard" });
  }
}
