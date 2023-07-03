var express = require("express");
var router = express.Router();
var controllers = require("../controllers/userController");

router.get("/", controllers.getAllUsers);
router.get("/:id", controllers.getUser);
router.post("/", controllers.createUser);
router.put("/:id", controllers.updateUser);
router.delete("/:id", controllers.deleteUser);

module.exports = router;
