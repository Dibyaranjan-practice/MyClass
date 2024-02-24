const router = require("express").Router();
const UserController = require("./../controllers/UserController");

router.get("/login", UserController.getLogin);

module.exports = router;
