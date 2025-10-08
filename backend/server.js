import express from 'express'
import cors from "cors";
import { authRouter } from './routes/auth.js';
import  session  from 'express-session'


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());


app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://fin.ialc.study"
  ],
  credentials: true
}));


app.use(session({
  secret: process.env.SESSION_SECRET || "dev_secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: 'lax'

  }

}))

// app.use((req, res, next) => {
//   console.log("Incoming request:", req.method, req.url);
//   next();
// });

app.get('/', (req, res) => {
  res.send('✅ API is running successfully!');
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running!' });
});


app.use('/api/auth', authRouter)

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
}).on('error', (err) => {
  console.error('Failed to start server:', err)
}) 