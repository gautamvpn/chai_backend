// 1st way
import dotenv from 'dotenv';
dotenv.config();

import connectDB from "./db/index.js"

console.log('Main file have DB connection code imported....')

connectDB();



// 2nd way
// : connecting DB and App route all in single main entry file

/*
import dotenv from "dotenv";
dotenv.config();

console.log("Index code started...");

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";

const app = express();

(async () => {
  try {
    console.log("Connecting to Mongo...");

    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    console.log("MongoDB connected!");

    app.listen(process.env.PORT, () => {
      console.log(`App running on port ${process.env.PORT}`);
    });

  } catch (error) {
    console.log("ERROR:", error);
  }
})();

*/