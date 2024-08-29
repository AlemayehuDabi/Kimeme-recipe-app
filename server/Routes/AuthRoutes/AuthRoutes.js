const express = require("express");
const router = express.Router();
const { signUp } = require("../../Controller/AuthController/AuthController");

router.route("/sign-up").post(signUp);

module.exports = router;
