import express from 'express'
import { registerUser, loginUser, getCurrentUser } from '../controller/authController.js'

export const authRouter = express.Router()

authRouter.post('/register', registerUser)
authRouter.post('/login', loginUser)
authRouter.get('/me', getCurrentUser)
