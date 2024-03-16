import mongoose from "mongoose";

const update = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  content: {
    updates: {
      type: [String],
      required: true,
    },
    fixes: {
      type: [String],
      required: true,
    },
    uses: {
      type: [String],
    },
  },

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag",
      required: true,
    },
  ],
});

export default mongoose.model("Update", update);
