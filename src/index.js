import app from './app.js';
import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({
  path: './.env',
});

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MongoDB Connections error (db/index.js)', error`);
  });

