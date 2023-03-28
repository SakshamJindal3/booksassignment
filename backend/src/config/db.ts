// const mongoose = require("mongoose");
import mongoose from "mongoose";
// import { ConnectOptions } from "mongodb/src";
const dotenv = require("dotenv");
// import dotenv from "dotenv";
dotenv.config();
const db = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(db);
        console.log("MongoDB is connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;