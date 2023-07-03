const Comment = require("../modules/comment");
const moment = require("moment");

exports.getComment = async (req, res, next) => {
  const id = req.params.id;
  const comment = await Comment.findById(id).exec();
  res.json(comment);
};
exports.createComment = async (req, res, next) => {
  const comment = new Comment({
    username: req.body.username,
    body: req.body.body,
    timeStamp: moment().format("MM/DD/YYYY"),
  });
  res.send(comment);
  await comment.save();
};
exports.getAllComments = async (req, res, next) => {
  const comments = await Comment.find().sort().exec();
  res.json(comments);
};
exports.updateComment = async (req, res, next) => {
  await Comment.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $set: {
        username: req.body.username,
        body: req.body.body,
        timeStamp: moment().format("MM/DD/YYYY"),
      },
    },
    { new: true }
  );
  res.send("updated");
};
exports.deleteComment = async (req, res, next) => {
  await Comment.findByIdAndRemove(req.params.id);
  res.send("deleted :v");
};
