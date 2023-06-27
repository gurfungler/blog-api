var express = require("express");
var router = express.Router();
var controllers = require("../controllers/userController");

module.exports = () => {
  router.get("/", controllers.allUsers);
  router.get("/:id", controllers.getUser);
  router.post("/:id", controllers.createUser);
  router.put("/:id", controllers.updateUser);
  router.delete("/:id", controllers.deleteUser);
};