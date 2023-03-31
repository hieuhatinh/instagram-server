const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const port = 4000;

const routers = require("./routes");
const db = require("./config/db/connect");

app.use(morgan("combined"));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// CORS
let corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

// Connect DB
db.connect();

// routers
routers(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
