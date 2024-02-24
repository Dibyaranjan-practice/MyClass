const mongoose = require("mongoose");

const url = process.env.MONGO_URI;

mongoose
  .connect(url)
  .then(() => {
    console.log("mongo connected");
  })
  .catch((error) => console.log("mongo connection failed " + error));

require("./../models/UserModel");
