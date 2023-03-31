const routerAccounts = require("./accounts");

function routers(app) {
  app.use("/accounts", routerAccounts);
}

module.exports = routers;
