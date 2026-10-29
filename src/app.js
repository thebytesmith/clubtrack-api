import express from 'express';
import cors from 'cors'
import healthCheckRouter from './routes/healthCheck.routes.js';
import { registerUser } from './controllers/user.controller.js';

const app = express();

// cors middlewares
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

// express middlewares
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))


app.use('/api/v1/healthCheck', healthCheckRouter);
app.use('/api/v1/auth', registerUser);

export default app;

