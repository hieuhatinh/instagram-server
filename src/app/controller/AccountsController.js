const Accounts = require("../models/Accounts");

class AccountsController {
  // [POST] /accounts/login
  login(req, res, next) {
    let username = req.body.username;
    let password = req.body.password;

    res.json({ username, password });

    // Accounts.find({
    //   username: username,
    //   password: password,
    // })
    //   .then((data) => {
    //     if (data.length > 0) {
    //       // res.status(200).json({
    //       //   data,
    //       //   statusCode: 200,
    //       //   message: "Đăng nhập thành công",
    //       // });
    //       console.log(data);
    //     } else {
    //       res.status(204).json({
    //         statusCode: 204,
    //         message: "Tên đăng nhập hoặc mật khẩu sai",
    //       });
    //     }
    //   })
    //   .catch((err) => res.json("loi server"));
  }

  // [POST] /accounts/register
  register(req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let phoneNumber = req.body.phoneNumber;

    Accounts.create({
      username: username,
      password: password,
      email: email,
      phone_number: phoneNumber,
    })
      .then(() => res.json("tạo tài khoản thành công"))
      .catch(() => res.json("lỗi server"));
  }
}

module.exports = new AccountsController();
