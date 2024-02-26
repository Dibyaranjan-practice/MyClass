const UserModel = require("./../models/UserModel");
exports.getLogin = (_, res) => {
  res.status(200).render("UserViews/Login.ejs");
};
exports.getSignup = (_, res) => {
  res.status(200).render("UserViews/SignUp.ejs");
};
exports.postSignup = (req, res) => {
  req.body.imageUrl = req.file.filename;
  UserModel.create(req.body)
    .then(() => res.status(200).json("created"))
    .catch((error) => {
      res.status(403).json("creatiion failed" + error);
    });
};
