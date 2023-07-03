var express = require("express");
var router = express.Router();
var controllers = require("../controllers/commentController");

router.get("/", controllers.getAllComments);
router.get("/:id", controllers.getComment);
router.post("/", controllers.createComment);
router.put("/:id", controllers.updateComment);
router.delete("/:id", controllers.deleteComment);

module.exports = router;
