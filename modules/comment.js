// https://mysite.com/posts/postId/comments
const mongoose = require("mongoose");

Schema = mongoose.Schema;

const CommentSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

const CommentModel = mongoose.model("comment", CommentSchema);

module.exports = CommentModel;
