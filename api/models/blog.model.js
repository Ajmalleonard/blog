import mongoose from "mongoose";

const { Schema } = mongoose;

const blog = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    overview: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    likes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blog);

export default Blog;
