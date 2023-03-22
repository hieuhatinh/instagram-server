class LoginController {
  // [GET] /login
  index(req, res, next) {
    res.json("login page");
  }
}

module.exports = new LoginController();
