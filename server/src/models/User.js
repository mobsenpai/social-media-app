const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 8,
      // maxlength: 50,
      // removed maxlength, because hashed password length exceeded 50 characters
      // not unique, because passwords can be same
    },

    email: {
      type: String,
      require: [true, "Email is required"],
      unique: true,
      lowercase: true,
      minlength: 2,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid");
        }
      },
    },

    profilePicture: {
      // string because we just need the name of image
      type: String,
      default: "",
    },

    coverPicture: {
      type: String,
      default: "",
    },

    followers: {
      type: Array,
      default: [],
    },

    following: {
      type: Array,
      default: [],
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },

    desc: {
      type: String,
      max: 100,
    },

    city: {
      type: String,
    },

    relationship: {
      type: Number,
      // three options
      enum: [1, 2, 3],
    },
  },
  // NOTE: after providing schema, we write this
  // timestamps log the time and date of each object
  { timestamps: true },
);

const User = new mongoose.model("User", userSchema);

module.exports = User;
