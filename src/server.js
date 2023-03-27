const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 4000;
const routers = require("./routes");
const db = require("./config/db/connect");

app.use(morgan("combined"));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Connect DB
db.connect();

// routers
routers(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
