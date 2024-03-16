import express from "express";
import Blog from "../models/blog.model.js";
import Updates from "../models/updates.model.js";

export const createUpdates = async (req, res, next) => {
  const { title, content, tags, overview, likes, comments } = req.body;
  try {
    const userName = req.user.name;
    const newUpdate = new Updates({
      title,
      overview,
      content,
      tags,
      likes,
      comments,
    });
    await newUpdate.save();
    res.json({ message: `Hey ${userName} blog created successfully"` });
  } catch (err) {
    next(err);
  }
};

export const getUpdates = async (req, res, next) => {
  try {
    const userName = req.user.name;
    const update = await Updates.findById(req.params.id);
    res.json(`Hey ${userName} blog updated successfully`);
  } catch (err) {
    next(err);
  }
};

export const deleteUpdates = async (req, res, next) => {
  try {
    const userName = req.user.name;
    const update = await Updates.findByIdAndDelete(req.params.id);
    res.json(`Hey ${userName} blog deleted successfully`);
  } catch (err) {
    next(err);
  }
};

export const updateUpdates = async (req, res, next) => {
  try {
    const userName = req.user.name;
    const update = await Updates.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(update);
  } catch (err) {
    next(err);
  }
};
