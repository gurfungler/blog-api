var express = require("express");
var router = express.Router();
var express = require("express");
var router = express.Router();
var controllers = require("../controllers/commentController");

module.exports = () => {
  router.get("/", controllers.allComment);
  router.get("/:id", controllers.getComment);
  router.post("/:id", controllers.createComment);
  router.put("/:id", controllers.updateComment);
  router.delete("/:id", controllers.deleteComment);
};
