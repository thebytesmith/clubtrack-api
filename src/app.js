import express from 'express';
import cors from 'cors'
import healthCheckRouter from './routes/healthCheck.routes.js';

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

app.use('/api/v1/healthCheck', healthCheckRouter);

export default app;

