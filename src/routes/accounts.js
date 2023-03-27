const express = require("express");
const router = express.Router();
const AccountsController = require("../app/controller/AccountsController");

// [POST] /accounts/login
router.post("/login", AccountsController.login);

// [POST] /accounts/register
router.post("/register", AccountsController.register);

module.exports = router;
