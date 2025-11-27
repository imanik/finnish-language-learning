// server.js
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import dotenv from "dotenv";

import { authRouter } from "./routes/auth.js";
import { leaderboardRouter } from "./routes/leaderboard.js";
import { getDBConnection } from "./database/db.js";



// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(express.json());
app.use(cookieParser());

// CORS setup
const allowedOrigins = [
  "http://localhost:3000",
  "https://fin.ialc.study",   // 🔹 Correct production frontend
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // Allow cookies to be sent cross-origin
  })
);

app.set("trust proxy", 1); // Required when using Render/Heroku/railway


// Session setup
app.use(
  session({
    secret: process.env.SESSION_SECRET || "defaultsecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // only send cookies over HTTPS in prod
      sameSite: "lax", // allows cross-origin with credentials
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    },
  })
);

// Optional: log incoming requests for debugging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Basic health check
app.get("/", (req, res) => {
  res.send("✅ API is running successfully!");
});
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend is running!" });
});

// ✅ Routes
app.use("/api/auth", authRouter);
app.use("/api/leaderboard", leaderboardRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error", details: err.message });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
}).on("error", (err) => {
  console.error("Failed to start server:", err);
});

