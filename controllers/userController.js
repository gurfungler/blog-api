const User = require("../modules/user");
const moment = require("moment");

exports.getUser = async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findById(id).exec();
  res.json(user);
};
exports.createUser = async (req, res, next) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });
  res.send(user);
  await user.save();
};
exports.getAllUsers = async (req, res, next) => {
  const users = await User.find().sort().exec();
  res.json(users);
};
exports.updateUser = async (req, res, next) => {
  await User.findOneAndUpdate(
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
exports.deleteUser = async (req, res, next) => {
  await User.findByIdAndRemove(req.params.id);
  res.send("deleted :v");
};
