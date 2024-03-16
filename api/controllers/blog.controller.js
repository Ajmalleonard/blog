import express from "express";
import Blog from "../models/blog.model.js";

export const createBlog = async (req, res, next) => {
  const { title, content, tags, overview, likes, comments } = req.body;
  try {
    const userName = req.user.name;
    const newBlog = new Blog({
      title,
      overview,
      content,
      tags,
      likes,
      comments,
      author: req.user.id,
    });
    await newBlog.save();
    res.json(`Hey ${userName}, blog created successfully`);
  } catch (err) {
    next(err);
  }
};

export const getBlog = async (req, res, next) => {
  try {
    const userName = req.user.name;
    const blog = await Blog.findById(req.params.id);
    res.json(`Hey ${userName},  the blog is created successfully `);
  } catch (err) {
    next(err);
  }
};
export const deleteBlog = async (req, res, next) => {
  try {
    const userName = req.user.name;
    const blog = await Blog.findByIdAndDelete(req.params.id);
    res.json(`Hey ${userName}, the blog is deleted successfully`);
  } catch (err) {
    next(err);
  }
};

export const updateBlog = async (req, res, next) => {
  try {
    const userName = req.user.name;
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(`Hey ${userName}, the blog is updated successfully`);
  } catch (err) {
    next(err);
  }
};
