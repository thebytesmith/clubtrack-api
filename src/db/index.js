import mongoose from 'mongoose';
import { DB_NAME } from '../contants.js';

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`\n MongoDB Connected (db/index.js)\n DB Host:${connectionInstance.connection.host}`);
  } catch (error) {
    console.log(('MongoDB Connections error (db/index.js)', error));
  }
};

export default connectDB