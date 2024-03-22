import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import user from "../models/user.model.js";
import { errorMaster } from "../utilities/error.utility.js";

export const Login = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    // Find user by username
    const User = await user.findOne({ username });
    if (!username || !password || username === "" || password === "")
      return next(errorMaster(400, "All Fields are required"));

    if (!User) return next("User not found");

    // Compare passwords
    const isMatch = await bcrypt.compare(password, User.password);
    if (!isMatch) return next(errorMaster(404, "Invalid password"));

    const token = jwt.sign(
      { id: User._id, username: User.username, isAdmin: User.isAdmin },
      process.env.JWTKEY,
      { expiresIn: "2h" }
    );

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({
        message: "Successfully logged in",
        user: { username: User.username, email: User.email }, // Return user's name in the response
      });
  } catch (err) {
    next(err);
  }
};

export const Register = async (req, res, next) => {
  const hash = bcrypt.genSaltSync(10);
  const { username, email, password } = req.body;

  const hashedPasword = bcrypt.hashSync(password, hash);

  try {
    const new_user = new user({
      username: username,
      email: email,
      password: hashedPasword,
    });
    await new_user.save();
    res.status(200).json("Successfully registered");
  } catch (err) {
    next(err);
  }
};

export const Logout = async (req, res, next) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json({
      message: "Successfully logged out",
    });
  } catch (err) {
    next(err);
  }
};

export const Refetch = (req, res, next) => {
  const token = req.cookies.access_token;
  jwt.verify(token, process.env.JWTKEY, {}, (err, data) => {
    if (err) return res.status(404).json(err);
  });
};
