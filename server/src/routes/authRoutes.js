const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// this is the root route
router.get("/", async (req, res) => {
  try {
    res.status(200).send("Auth route");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// User register route
// needs the User model imported in this module
router.post("/register", async (req, res) => {
  try {
    // this is a way to store passwords in an encrypted format
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      // manually destructuring, because directly using req.body is a security risk
      // because a user can send a isAdmin: true, in their request and that is not what we want
      // hence this is a controlled way
      // we can also do object destructuring way as well, like -
      // const {username, email, password} = req.body;
      username: req.body.username,
      email: req.body.email,
      // use the hashed password instead of normal password text
      // password: req.body.password,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).send("Data stored");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// User login route
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    // username not found in database
    if (!user) {
      res.status(404).send("User not found");
      return;
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password,
    );

    // username correct, password incorrect
    if (!validPassword) {
      res.status(404).send("Incorrect password");
      return;
    }

    // both username and password correct
    const { password, ...other } = user._doc;
    // so if you send only user has a ._doc which has all the fields in it,
    // we can just use user.password etc, but sending the full user object has ._doc so we instead destructure only the user._doc and get the password out of it and then send it
    res.status(200).send(other);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;

// TODO: i have used .send(), instructor used .json()
