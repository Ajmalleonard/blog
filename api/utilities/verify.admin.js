import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const verifyAdmin = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("You are not authenticated!");

  jwt.verify(token, process.env.JWTKEY, (err, decodedToken) => {
    if (err) return res.status(403).json("Token is not valid!");
    req.user = decodedToken;
    if (decodedToken.isAdmin) {
      next();
    } else {
      return res
        .status(403)
        .json("You are not authorized to perform this action");
    }
  });
};

export default verifyAdmin;
