const mongoose = require("mongoose");

Schema = mongoose.Schema;

const PostSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  timeStamp: { type: String },
  body: {
    type: String,
    required: true,
  },
});

const PostModel = mongoose.model("post", PostSchema);

module.exports = PostModel;
