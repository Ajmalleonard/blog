import express from "express";
import verifyAdmin from "../utilities/verify.admin.js";
import {
  createBlog,
  deleteBlog,
  updateBlog,
  getBlog,
  getBlogs,
} from "../controllers/blog.controller.js";

const route = express.Router();

route.post("/create", verifyAdmin, createBlog); // Changed to /create
route.get("/:slug", getBlog); // Changed to /:id
route.get("/", getBlogs); // No change
route.delete("/delete/:id", verifyAdmin, deleteBlog); // Changed to /delete/:id
route.put("/update/:id", verifyAdmin, updateBlog); // Changed to /update/:id

export default route;
