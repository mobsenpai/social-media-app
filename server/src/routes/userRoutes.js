const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

// this route means
// will show on localhost:8800/api/users/
// because in app.use we have specified the route as api/users
// so this is the home route of api/users/ route
router.get("/", async (req, res) => {
  res.status(200).send("Users route");
});

// IMPORTANT:
// Update user profile, put request
router.put("/:id", async (req, res) => {
  try {
    // Validate user
    // compare the userId sent in the request body (from the frontend) with the :id in the URL.
    // they must match, OR the user must be an admin.
    // NOTE: In production, this userId will come from a JWT token, not the request body.
    const _id = req.params.id;
    if (!(req.body.userId == _id || req.body.isAdmin)) {
      res.status(403).send("You are not permited to update user profile");
      return;
    }

    // If user passes validation, then proceed to -

    // Hash the password, if sent with the update request
    // before we update the actual document later
    try {
      // if password sent with req, update it
      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        // NOTE: here not updating the document, but the actual req.body.password,
        // which we got from client to proceed with hashed password, not the actual password
        req.body.password = hashedPassword;
      }
    } catch (err) {
      // if bcrypt fails, its a server error(500)
      res.status(500).send("Failed to hash password");
      return;
    }

    // Update whole document
    // any key value pair sent, update the old one with those
    // NOTE: here the req.body.password, would be the hased password
    try {
      const updatedUser = await User.findByIdAndUpdate(
        _id,
        { $set: req.body },
        { new: true, runValidators: true }, // runValidators enable validation, which is off by default for update request
      );
      // if update succeeds
      res.status(200).send("Profile has been updated");
    } catch (err) {
      // this can be both server error (eg - network error) and client error (eg - wrong fields)
      // so we should better use if else for various types of errors and rend status
      // accordingly, but for simplicity i just send one
      res.status(400).send(`Failed to update user profile: ${err.message}`);
    }
  } catch (err) {
    res
      .status(500) // any other erros where the client didn't make any mistake
      .send(`Unexpected error when updating user profile: ${err.message}`);
  }
});

// Delete profile
router.delete("/:id", async (req, res) => {
  try {
    const _id = req.params.id;

    // Authenticate user first
    if (!(req.body.userId == _id || req.body.isAdmin)) {
      res.status(403).send("User is not permitted to delete profile");
      return;
    }

    // Delete profile
    const deleteUser = await User.findByIdAndDelete(_id);

    // If user id doesnt exit
    // NOTE: didnt use try catch because this error is predictable
    // and can be checked, so earlier we used try catch because we didnt know what errors
    // could be thrown
    if (!deleteUser) {
      res.status(404).send("User not found");
      return;
    }

    res.status(200).send("User profile deleted");
  } catch (err) {
    res
      .status(500)
      .send(`Unexpected error when deleting profile: ${err.message}`);
  }
});

// Get user profile
router.get("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getUser = await User.findById(_id);

    if (!getUser) {
      res.status(404).send("User not found");
      return;
    }

    // we did destructuring to only get insensitive information in other variable
    // excluding password and updatedAt on separate variables
    // NOTE: mongoose documents are nested in _doc key
    const { password, updatedAt, ...other } = getUser._doc;
    // will send the response containing all the user information
    // defined in our User schema
    res.status(200).send(other);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Follow a user
// when follow, both users followers and following respectively will be updated
// hence a put or "update" request
// NOTE: using patch request would be more semantic, because we are only updating a certain section of document
router.put("/:id/follow", async (req, res) => {
  try {
    const _id = req.params.id;
    if (req.body.userId == _id) {
      res.status(403).send("Cannot follow yourself");
      return;
    }

    const targetUser = await User.findById(_id);
    const currentUser = await User.findById(req.body.userId);

    if (!targetUser || !currentUser) {
      res.status(400).send("User not found");
      return;
    }

    // NOTE: here we didnt need to do targetuse._doc, because, its only required
    // when destructuring
    if (targetUser.followers.includes(req.body.userId)) {
      res.status(400).send("Already following this user");
      return;
    }

    await targetUser.updateOne({ $push: { followers: req.body.userId } });
    await currentUser.updateOne({ $push: { following: _id } });
    res.status(200).send("User followed");
  } catch (err) {
    res.status(500).send(`Unexpected error ${err.message}`);
  }
});

// Unfollow a user
router.put("/:id/unfollow", async (req, res) => {
  try {
    const _id = req.params.id;
    if (req.body.userId == _id) {
      res.status(403).send("Cannot unfollow yourself");
      return;
    }

    const targetUser = await User.findById(_id);
    const currentUser = await User.findById(req.body.userId);

    if (!targetUser || !currentUser) {
      res.status(400).send("User not found");
      return;
    }

    if (!targetUser.followers.includes(req.body.userId)) {
      res.status(400).send("Already not following this user");
      return;
    }

    // Just changed push to pull
    // NOTE: both $push and $pull only works on array data type
    await targetUser.updateOne({ $pull: { followers: req.body.userId } });
    await currentUser.updateOne({ $pull: { following: _id } });
    res.status(200).send("User unfollowed");
  } catch (err) {
    res.status(500).send(`Unexpected error ${err.message}`);
  }
});

module.exports = router;
