const routerAccounts = require("./accounts");

function routers(app) {
  // app.use("/", (req, res) => {
  //   res.send("Hello World!");
  // });

  app.use("/accounts", routerAccounts);
}

module.exports = routers;
