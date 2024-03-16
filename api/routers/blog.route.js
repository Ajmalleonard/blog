import express from "express";
import verifyAdmin from "../utilities/verify.admin.js";
import {
  createBlog,
  deleteBlog,
  updateBlog,
  getBlog,
} from "../controllers/blog.controller.js";

const route = express.Router();

route.get("/", (req, res) => {
  res.send("This is the post page");
});

route.post("/create-blog", verifyAdmin, createBlog);
route.get("/:id", getBlog);
route.delete("/delete-blog/:id", verifyAdmin, deleteBlog);
route.put("/update-blog/:id", verifyAdmin, updateBlog);

export default route;
