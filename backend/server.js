// server.js
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import dotenv from "dotenv";
import createTables from "./database/createTables.js"; // Import your script
import { authRouter } from "./routes/auth.js";
import leaderboardRouter  from "./routes/leaderboard.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Run database setup on startup
createTables().then(() => {
  console.log('Database initialized');
}).catch((err) => {
  console.error('Database setup failed:', err);
});

// Middleware
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
  "http://localhost:3000",
  "https://fin.ialc.study", // Your production frontend
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(session({
  secret: process.env.SESSION_SECRET || "defaultsecret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  },
}));

// Log incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Health check
app.get("/", (req, res) => {
  res.send("✅ API is running successfully!");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend is running!" });
});

// Routes
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