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
const port = 1010;

dotenv.config();
api.get("/", (req, res) => {
  res.json("Hello World");
});

const corsOptions = {
  origin: [
    "https://ajmaljs.com",
    "https://admin.ajmaljs.com",
    "https://www.ajmaljs.com",
    "http://localhost:3000",
    "http://localhost:3001",
  ],
  optionsSuccessStatus: 200,
  credentials: true,
};

//middleware
api.use(cors(corsOptions));
api.use(cookieParser());
api.use("/api/blogs", blogRouter);

api.use("api/auth", Authenticator);

//Next middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
});

//conecting to mongo db

const connect = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("Connected to MongoDB");
  } catch (err) {
    throw err;
  }
};
api.listen(port, () => {
  connect();
  console.log(`Server running on port ${port}`);
});
