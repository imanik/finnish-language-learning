import express from 'express'
import cors from "cors";
import { authRouter } from './routes/auth.js';
import  session  from 'express-session'


const app = express();
const PORT = 5000;

app.use(express.json());


app.use(cors({
  origin: "http://localhost:3000",  // frontend URL
  credentials: true                 // allow cookies/sessions
}));

app.use(session({
  secret: process.env.SESSION_SECRET || "dev_secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false, // https only if true
    sameSite: 'lax'

  }

}))

// app.use((req, res, next) => {
//   console.log("Incoming request:", req.method, req.url);
//   next();
// });

app.use('/api/auth', authRouter)

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
}).on('error', (err) => {
  console.error('Failed to start server:', err)
}) 