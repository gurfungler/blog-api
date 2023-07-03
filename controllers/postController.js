const Post = require("../modules/post");
const moment = require("moment");

exports.getPost = async (req, res, next) => {
  const id = req.params.id;
  const post = await Post.findById(id).exec();
  res.json(post);
};
exports.createPost = async (req, res, next) => {
  const post = new Post({
    id: req.params.id,
    username: req.body.username,
    title: req.body.title,
    body: req.body.body,
    timeStamp: moment().format("MM/DD/YYYY"),
  });
  res.send(post);
  await post.save();
};
exports.getAllPosts = async (req, res, next) => {
  const posts = await Post.find().sort().exec();
  res.json(posts);
};
exports.updatePost = async (req, res, next) => {
  await Post.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $set: {
        username: req.body.username,
        title: req.body.title,
        body: req.body.body,
        timeStamp: moment().format("MM/DD/YYYY"),
      },
    },
    { new: true }
  );
  res.send("updated");
};
exports.deletePost = async (req, res, next) => {
  await Post.findByIdAndRemove(req.params.id);
  res.send("deleted :v");
};
