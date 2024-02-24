const { model, Schema } = require("mongoose");

const UserSchema = Schema({
  name: { type: "String", required: true },
  role: { type: "String", required: true },
  email: { type: "String", required: true },
  password: { type: "String", required: true },
  username: { type: "String", required: true, unique: true },
  phone: {
    type: "Number",
    required: true,
    unique: true,
    min: 1000000000,
    max: 9999999999,
  },
  imageUrl: { type: "String", unique: true },
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;
