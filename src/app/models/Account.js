const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Account = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String },
  phoneNumber: { type: String },
});

module.exports = mongoose.model("accounts", Account);
