import express from "express";
import blogRouter from "./routers/blog.route.js";
import cookieParser from "cookie-parser";

import Authenticator from "./routers/auth.route.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

const api = express();
api.use(express.json());
const port = 1000;

dotenv.config();
api.get("/", (req, res) => {
  res.send("Hello World");
});

//middleware
api.use(cors({ origin: "http://localhost:3000" }));
api.use(cookieParser());
api.use("/ajmalmaker/", blogRouter);
api.use("/user/", Authenticator);

//Next middleware
api.use((err, req, res, next) => {
  const errorStatus = err.status || 400; // Set error status depending on error
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: process.env.NODE_ENV === "development" ? err.stack : null, // Stack trace in development
  });
});

//conecting to mongo db

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (err) {
    throw err;
  }
};
api.listen(port, () => {
  connect();
  console.log(`Server running on port ${port}`);
});
