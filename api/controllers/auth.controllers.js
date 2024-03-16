import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import user from "../models/user.model.js";

export const Login = async (req, res, next) => {
  try {
    // Find user by username
    const User = await user.findOne({ name: req.body.username });
    if (!User) return next("User not found");

    // Compare passwords
    const isMatch = await bcrypt.compare(req.body.password, User.password);
    if (!isMatch) return next("Password authentication failed");

    // Generate JWT token with user ID, name, and isAdmin flag
    const token = jwt.sign(
      { id: User._id, name: User.name, isAdmin: User.isAdmin },
      process.env.JWTKEY,
      { expiresIn: "2h" }
    );

    // Set access token cookie and send response
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({
        message: "Successfully logged in",
        user: { name: User.name }, // Return user's name in the response
      });
  } catch (err) {
    next(err);
  }
};

export const Register = async (req, res, next) => {
  const hash = bcrypt.genSaltSync(10);
  const password = bcrypt.hashSync(req.body.password, hash);

  try {
    const new_user = new user({
      name: req.body.name,
      email: req.body.email,
      password: password,
    });
    await new_user.save();
    res.status(200).send("You're Successfully registered");
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
