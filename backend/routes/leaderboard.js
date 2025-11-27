// routes/leaderboard.js
import express from 'express';
import {
  leaderboardEntry,
  leaderboardData,        // ← Make sure this is imported
  leaderboardUpdate
} from '../controller/leaderboardController.js';

export const leaderboardRouter = express.Router();

console.log("Leaderboard router loaded");

// These are the real routes
leaderboardRouter.post('/entry', leaderboardEntry);
leaderboardRouter.get('/data', leaderboardData);        // ← UNCOMMENT & USE THIS
leaderboardRouter.post('/update-progress', leaderboardUpdate);

// Optional: Remove the test route completely
// leaderboardRouter.get('/data', (req, res) => { ... })  ← DELETE THIS

export default leaderboardRouter;