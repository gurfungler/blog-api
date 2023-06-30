const asyncHandler = require("express-async-handler");
const Posts = require("../modules/post");
const moment = require("moment");

module.exports = () => {
  getPost: async (req, res) => {
    const id = req.params.id;
    const post = await Posts.findById(id).exec();
    res.json(post);
  };
  allPosts: async (req, res) => {
    const id = req.params.id;
    const posts = await Posts.find().sort().exec();
    res.json(posts);
  };
  createPost: async (req, res) => {
    // Validate and sanitize fields.
    body("title")
      .trim()
      .isLength({ min: 1 })
      .escape()
      .withMessage("Title name must be specified."),
      body("body")
        .trim()
        .isLength({ min: 1 })
        .escape()
        .withMessage("Body required"),
      // Process request after validation and sanitization.
      asyncHandler(async (req, res, next) => {
        // Extract the validation errors from a request.
        const errors = validationResult(req);
        // Create Member object with escaped and trimmed data
        const post = new Post({
          username: req.user.first_name,
          title: req.body.title,
          body: req.body.body,
          timeStamp: moment().format("MM/DD/YYYY"),
        });

        if (!errors.isEmpty()) {
          // There are errors. Render form again with sanitized values/errors messages.
          res.json(post);
          return;
        } else {
          // Data from form is valid.
          // Save member.
          await post.save();
          // Redirect to home.
          res.redirect("/");
        }
      });

    updatePost: async (req, res) => {};
    deletePost: async (req, res) => {
      await Posts.findByIdAndRemove(req.params.id);
    };
  };
};
