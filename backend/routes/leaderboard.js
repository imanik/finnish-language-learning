import express from 'express';
import { leaderboardEntry, leaderboardData, leaderboardUpdate } from '../controller/leaderboardController.js';

export const leaderboardRouter = express.Router();


leaderboardRouter.post('/entry',leaderboardEntry)
leaderboardRouter.get('/data',leaderboardData)
leaderboardRouter.post("/update-progress", leaderboardUpdate)

