const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");
// bring in post model
const Profile = require("../../models/Post");

// post validation
const validatePostRequest = require("../../validation/post");

//@route GET api/posts/test
//@desc Tests post route
//@access Public
router.get("/test", (req, res) =>
  res.json({
    msg: "posts works"
  })
);

//@route POST api/posts/
//@desc add posts
//@access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostRequest(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    //  create post object
    const newPost = {
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id
    };

    new Post(newPost).save().then(post => res.json(post));
  }
);
module.exports = router;
