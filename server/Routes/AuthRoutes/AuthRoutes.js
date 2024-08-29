const express = require("express");
const router = express.Router();
const {
  signUp,
  login,
} = require("../../Controller/AuthController/AuthController");

router.route("/sign-up").post(signUp);
router.route("/login").post(login);

module.exports = router;
