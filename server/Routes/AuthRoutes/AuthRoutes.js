const express = require("express");
const router = express.Router();
const {
  signUp,
  login,
  forgetPassword,
} = require("../../Controller/AuthController/AuthController");

router.route("/sign-up").post(signUp);
router.route("/login").post(login);
router.route("/forget").post(forgetPassword);

module.exports = router;
