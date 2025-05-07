const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const db = require("./config/db");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Root Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Learn Finnish Backend! Try /api/test" });
});

// Signup
app.post("/api/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    db.query(
      `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`,
      [username, email, hashedPassword],
      (err, result) => {
        if (err) {
          console.error("Error creating user:", err);
          return res.status(500).json({ error: "Database error" });
        }
        res.json({ id: result.insertId, username, email });
      }
    );
  } catch (err) {
    console.error("Error hashing password:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Login
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  db.query(
    `SELECT * FROM users WHERE email = ? AND password = ?`,
    [email, password],
    (err, results) => {
      if (err) {
        console.error("Error fetching user:", err);
        return res.status(500).json({ error: "Database error" });
      }
      if (results.length === 0) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      const user = results[0];
      res.json({ id: user.id, username: user.username, email: user.email });
    }
  );
});

// Test Route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is running!" });
});

// Get Completed Tutorials, Exercises, Quizzes
app.get("/api/user/:userId/completed", (req, res) => {
  const userId = req.params.userId;
  const queries = {
    tutorials: `SELECT * FROM tutorials WHERE user_id = ?`,
    exercises: `SELECT * FROM exercises WHERE user_id = ?`,
    quizzes: `SELECT * FROM quizzes WHERE user_id = ?`
  };

  Promise.all([
    new Promise((resolve, reject) => {
      db.query(queries.tutorials, [userId], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    }),
    new Promise((resolve, reject) => {
      db.query(queries.exercises, [userId], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    }),
    new Promise((resolve, reject) => {
      db.query(queries.quizzes, [userId], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    })
  ])
    .then(([tutorials, exercises, quizzes]) => {
      res.json({ tutorials, exercises, quizzes });
    })
    .catch((err) => {
      console.error("Error fetching completed items:", err);
      res.status(500).json({ error: "Database error" });
    });
});

// Get Progress and Streaks
app.get("/api/user/:userId/progress", (req, res) => {
  const userId = req.params.userId;
  db.query(
    `SELECT date, streak_count FROM progress WHERE user_id = ? ORDER BY date DESC`,
    [userId],
    (err, results) => {
      if (err) {
        console.error("Error fetching progress:", err);
        return res.status(500).json({ error: "Database error" });
      }
      res.json(results);
    }
  );
});

// Set or Update Goal
app.post("/api/user/:userId/goals", (req, res) => {
  const userId = req.params.userId;
  const { title, description, target_date } = req.body;
  db.query(
    `INSERT INTO goals (user_id, title, description, target_date) VALUES (?, ?, ?, ?)`,
    [userId, title, description, target_date],
    (err, result) => {
      if (err) {
        console.error("Error creating goal:", err);
        return res.status(500).json({ error: "Database error" });
      }
      res.json({ id: result.insertId, title, description, target_date });
    }
  );
});

// Get Goals
app.get("/api/user/:userId/goals", (req, res) => {
  const userId = req.params.userId;
  db.query(
    `SELECT * FROM goals WHERE user_id = ?`,
    [userId],
    (err, results) => {
      if (err) {
        console.error("Error fetching goals:", err);
        return res.status(500).json({ error: "Database error" });
      }
      res.json(results);
    }
  );
});

// Record Completed Activity
app.post("/api/user/:userId/complete", (req, res) => {
  const userId = req.params.userId;
  const { type, title, score, total } = req.body; // type: 'tutorial', 'exercise', 'quiz'
  let query;
  let params;
  if (type === "quiz") {
    query = `INSERT INTO quizzes (user_id, title, score, total) VALUES (?, ?, ?, ?)`;
    params = [userId, title, score, total];
  } else {
    query = `INSERT INTO ${type}s (user_id, title) VALUES (?, ?)`;
    params = [userId, title];
  }
  db.query(query, params, (err, result) => {
    if (err) {
      console.error(`Error recording ${type}:`, err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json({ id: result.insertId, title });
  });
});

// Update Streak
app.post("/api/user/:userId/progress", (req, res) => {
  const userId = req.params.userId;
  const today = new Date().toISOString().split("T")[0];
  db.query(
    `SELECT streak_count FROM progress WHERE user_id = ? AND date = DATE_SUB(?, INTERVAL 1 DAY)`,
    [userId, today],
    (err, results) => {
      if (err) {
        console.error("Error checking streak:", err);
        return res.status(500).json({ error: "Database error" });
      }
      const streak = results.length > 0 ? results[0].streak_count + 1 : 1;
      db.query(
        `INSERT INTO progress (user_id, date, streak_count) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE streak_count = ?`,
        [userId, today, streak, streak],
        (err) => {
          if (err) {
            console.error("Error updating streak:", err);
            return res.status(500).json({ error: "Database error" });
          }
          res.json({ date: today, streak_count: streak });
        }
      );
    }
  );
});

// Mark Goal as Completed
app.put("/api/user/:userId/goals/:goalId", (req, res) => {
  const { userId, goalId } = req.params;
  db.query(
    `UPDATE goals SET is_completed = TRUE WHERE id = ? AND user_id = ?`,
    [goalId, userId],
    (err) => {
      if (err) {
        console.error("Error updating goal:", err);
        return res.status(500).json({ error: "Database error" });
      }
      res.json({ id: goalId, is_completed: true });
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});