import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import user from "../models/user.model.js";
import {
  Login,
  Logout,
  Refetch,
  Register,
} from "../controllers/auth.controllers.js";

const router = express.Router().get("/", (req, res, next) => {
  res.send({ message: "This is Authentication page" });
});

// Register route
router.post("/register", Register);

// Log in route
router.post("/login", Login);

// log out route
router.get("/logout", Logout);

router.get("/refetch", Refetch);

export default router;
