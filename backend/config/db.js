import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import process from 'process';

dotenv.config();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export { MongoClient, mongoose, dbConnection };
