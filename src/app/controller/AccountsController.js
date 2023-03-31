const Accounts = require("../models/Accounts");

class AccountsController {
  // [POST] /accounts/login
  login(req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    console.log(username);

    Accounts.find()
      .or([
        { username: username, password: password },
        { email: username, password: password },
        { phone_number: username, password: password },
      ])
      .then((data) => {
        console.log(data);
        if (data.length > 0) {
          res.send({
            statusCode: 200,
            message: "Đăng nhập thành công",
          });
        } else {
          res.send({
            statusCode: 204,
            message: "Tên đăng nhập hoặc mật khẩu sai",
          });
        }
      })
      .catch((err) => res.send(err));
  }

  // [POST] /accounts/register
  register(req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let phoneNumber = req.body.phoneNumber;
    let full_name = req.body.full_name;

    Accounts.create({
      username: username,
      password: password,
      email: email,
      phone_number: phoneNumber,
      full_name: full_name,
    })
      .then(() => res.json("tạo tài khoản thành công"))
      .catch(next);
  }
}

module.exports = new AccountsController();
