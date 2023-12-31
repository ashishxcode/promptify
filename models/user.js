import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
    trim: true,
  },
  username: {
    type: String,
    unique: [true, "Username already exists"],
    match: [
      /^[a-zA-Z0-9._%+-]+$/,
      "Username can only include alphanumeric characters, underscores, periods, and percent signs",
    ],

    required: [true, "Username is required"],
    trim: true,
  },
  name: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    trim: true,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
