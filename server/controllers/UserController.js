exports.getLogin = (_, res) => {
  res.status(200).render("UserViews/Login.ejs");
};
