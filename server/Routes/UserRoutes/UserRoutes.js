const express = require("express");
const router = express.Router();
const {
  getUser,
  //   deleteUser,
  //   changePassword,
  //   updateProfile,
} = require("../../Controller/UserController/UserController");
const authMiddleWare = require("../../Middleware/AuthProtector/auth");

// router user
router.route("/get").get(authMiddleWare, getUser);
// router.route("/delete").delete(authMiddleWare, deleteUser);
// router.route("/change-password").patch(authMiddleWare, changePassword);
// router.route("/update-profile").put(authMiddleWare, updateProfile);

module.exports = router;
