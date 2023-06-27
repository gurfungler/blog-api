var express = require("express");
var router = express.Router();
var express = require("express");
var router = express.Router();
var controllers = require("../controllers/postController");

module.exports = () => {
  router.get("/", controllers.allPosts);
  router.get("/:id", controllers.getPost);
  router.post("/:id", controllers.createPost);
  router.put("/:id", controllers.updatePost);
  router.delete("/:id", controllers.deletePost);
};
