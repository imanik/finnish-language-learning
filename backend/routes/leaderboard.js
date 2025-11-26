import express from 'express';
import { leaderboardEntry, leaderboardData, leaderboardUpdate } from '../controller/leaderboardController.js';

export const leaderboardRouter = express.Router();


leaderboardRouter.post('/entry',leaderboardEntry)
// leaderboardRouter.get('/data',leaderboardData)
leaderboardRouter.post("/update-progress", leaderboardUpdate)

console.log("Leaderboard router loaded");

leaderboardRouter.get('/data', (req, res) => {
  console.log("GET /api/leaderboard/data hit");
  res.json({ message: "Test works!" });
});

