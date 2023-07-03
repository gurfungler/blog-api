var express = require("express");
var router = express.Router();
var controllers = require("../controllers/postController");

router.get("/", controllers.getAllPosts, (req, res, next) => {
  res.render("post", {
    title: ":v",
    post_list: req.body,
  });
});
router.get("/:id", controllers.getPost);
router.post("/", controllers.createPost);
router.put("/:id", controllers.updatePost);
router.delete("/:id", controllers.deletePost);

module.exports = router;
