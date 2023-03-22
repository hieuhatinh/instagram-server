const mongoose = require("mongoose");

async function connect() {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/instagram")
    .then(() => console.log("Connected successfully!"))
    .catch(() => console.log("Connected failured"));
}

module.exports = { connect };
