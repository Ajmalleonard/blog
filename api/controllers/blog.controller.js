import express from "express";
import Blog from "../models/blog.model.js";

export const createBlog = async (req, res, next) => {
  const { title, content, tags, overview, likes, comments, ...other } =
    req.body;
  try {
    const newBlog = new Blog({
      title,
      overview,
      content,
      tags,
      likes,
      comments,
      author: req.user._id,
      ...other,
    });
    await newBlog.save();
    res.status(200).json({ message: `Hey, blog created successfully` });
  } catch (err) {
    next(err);
  }
};

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    next(err);
  }
};

export const getBlog = async (req, res, next) => {
  try {
    const { slug } = req.params;

    const blog = await Blog.findOne({ slug });
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (err) {
    next(err);
  }
};

export const updateBlog = async (req, res, next) => {
  try {
    await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ message: `Hey, the blog is updated successfully` });
  } catch (err) {
    next(err);
  }
};

export const deleteBlog = async (req, res, next) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: `Hey, the blog is deleted successfully` });
  } catch (err) {
    next(err);
  }
};
