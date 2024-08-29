const express = require("express");
const router = express.Router();
const {
  signUp,
  login,
  forgetPassword,
  resetPassword,
} = require("../../Controller/AuthController/AuthController");

router.route("/sign-up").post(signUp);
router.route("/login").post(login);
router.route("/forget").post(forgetPassword);
router.route("/reset").post(resetPassword);

module.exports = router;
