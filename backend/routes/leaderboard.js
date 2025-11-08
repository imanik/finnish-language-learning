import express from 'express';
import { leaderboardEntry, leaderboardData } from '../controller/leaderboardController.js';

export const leaderboardRouter = express.Router();


leaderboardRouter.post('/entry',leaderboardEntry)
leaderboardRouter.get('/data',leaderboardData)

