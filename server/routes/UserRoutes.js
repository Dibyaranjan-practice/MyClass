const router = require("express").Router();
const UserController = require("./../controllers/UserController");

router.get("/login", UserController.getLogin);
router.get("/signup", UserController.getSignup);
router.post("/signup", UserController.postSignup);

module.exports = router;
