const mongoose = require("mongoose");
const validator = require("validator");

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      // NOTE: maxlength is for string type
      // max is for number type
      maxlength: 50,
    },

    username: {
      type: String,
      required: true,
    },

    desc: {
      type: String,
      maxlength: 50,
    },

    profilePicture: {
      type: String,
      default: "",
    },

    img: {
      type: String,
    },

    likes: {
      type: Array,
      // NOTE: always initialise array with [], otherwise will it undefined
      default: [],
    },
  },
  { timestamps: true },
);

const Post = new mongoose.model("Post", postSchema);

module.exports = Post;
