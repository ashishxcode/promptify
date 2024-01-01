import mongoose, { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required"],
  },
  tag: {
    type: String,
    required: [true, "Tag is required"],
  },
});

const Post = models.Post || model("Post", PostSchema);

export default Post;
