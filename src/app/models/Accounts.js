const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Accounts = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  full_name: { type: String },
  email: { type: String },
  phone_number: { type: String },
});

module.exports = mongoose.model("accounts", Accounts);
