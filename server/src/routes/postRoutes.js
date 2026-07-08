const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const User = require("../models/User");

// to test if working
router.get("/", async (req, res) => {
  res.status(200).send("Posts route");
});

// Create a post
router.post("/", async (req, res) => {
  try {
    // NOTE: here we are just using the post request body as is,
    // which is like we are trusting the user to send correct post request
    // but user can send likes, createdAt etc which shouldnt be sent in the post request
    // so we should actually destructure the req.body and only allow setting those
    // fields which we want to actually be used from the request
    // but for simplicity we are using as is
    const newPost = new Post(req.body);
    // using await here, because .save() would return a promise
    // i.e it will be an empty object till the data is fetched, then it returns
    // the actual value
    await newPost.save();
    res.status(201).send("Post created");
  } catch (err) {
    res.status(500).send(`Unexpected error: ${err.message}`);
  }
});

// Update a post
router.put("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const currentPost = await Post.findById(_id);
    if (req.body.userId != currentPost.userId) {
      res.status(403).send("User not permitted to update post");
      return;
    }

    if (!currentPost) {
      res.status(404).send("Post not found");
      return;
    }

    try {
      // NOTE: still unsecure, should destructure and allow only specific fields to be updated
      await currentPost.updateOne({ $set: req.body }, { runValidators: true });
      // NOTE: new: true, is only for findByIdAndUpdate

      res.status(200).send("Post updated");
    } catch (err) {
      // NOTE: because we dont know what kind of error can happen here
      // but we also know its not gonna be a server error
      // hence we want to send a different status code
      // thats why used try catch block here
      res.status(400).send(`Failed to update post: ${err.message}`);
    }
  } catch (err) {
    res.status(500).send(`Unexpected error: ${err.message}`);
    // NOTE: we can also just do one try catch and use if else in catch block
    // to find out what kind of err
    // happened and send the status codes accordingly
    // so that would remove using multiple nested try catch statements
  }
});

// Delete a post

router.delete("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const currentPost = await Post.findById(_id);
    if (!currentPost) {
      res.status(404).send("Post not found");
      return;
    }

    if (req.body.userId != currentPost.userId) {
      res.status(403).send("User not permitted to delete post");
      return;
    }

    try {
      // we send the _id when we do findByIdAndDelete() not with just deleteOne();
      await currentPost.deleteOne();
      res.status(200).send("Post deleted");
    } catch (err) {
      res.status(400).send(`Failed to delete post: ${err.message}`);
    }
  } catch (err) {
    res.status(500).send(`Unexpected error: ${err.message}`);
  }
});

// Like or dislike post
router.put("/:id/like", async (req, res) => {
  try {
    const _id = req.params.id;
    const currentPost = await Post.findById(_id);

    if (!currentPost) {
      res.status(404).send("Post not found");
      return;
    }

    try {
      if (currentPost.likes.includes(req.body.userId)) {
        await currentPost.updateOne({ $pull: { likes: req.body.userId } });
        res.status(200).send("Post disliked");
        return;
      }

      // dont forget await
      await currentPost.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).send("Post liked");
    } catch (err) {
      res.status(400).send(`Failed to like post: ${err.message}`);
    }
  } catch (err) {
    res.status(500).send(`Unexpected error: ${err.message}`);
  }
});

// Fetch timeline posts
router.get("/timeline/all", async (req, res) => {
  try {
    // NOTE: changes: here it was req.body.userId,
    // but its discouraged to send body with get request and is often
    // ignored by browsers so use query strings instead
    // which is also not the best way and hence has to be used with jwt tokens
    const currentUser = await User.findById(req.query.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.following.map((friendId) => {
        return Post.find({ userId: friendId });
      }),
    );

    // Here we get one array of userPosts and another array of friendPosts
    // .concat() merges two arrays into one new array
    // NOTE: Promise.all returns an array itself, hence all the friend posts would be
    // [[post1], [post2], [post3]], so we need to destructure it then concat would
    // make all of them in one array
    res.status(200).json(userPosts.concat(...friendPosts));
  } catch (err) {
    res.status(500).send(`Unexpected error: ${err.message}`);
  }
});

module.exports = router;
