import mongoose from "mongoose";

const { Schema } = mongoose;

const codeBlockSchema = new Schema({
  language: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  title: String,
  highlightedLines: [Number],
  showLineNumbers: {
    type: Boolean,
    default: false,
  },
});

const blog = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
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
    codeBlocks: {
      type: [codeBlockSchema],
      default: undefined,
    },
    series: {
      type: String,
      default: undefined,
    },
    publishedAt: Date,
    lastModified: Date,
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blog);

export default Blog;
