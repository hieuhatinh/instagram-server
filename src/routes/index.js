const routerLogin = require("./login");

function routers(app) {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.use("/login", routerLogin);
}

module.exports = routers;
