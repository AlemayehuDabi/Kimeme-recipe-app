const express = require("express");
const router = express.Router();
const authMiddleWare = require("../../Middleware/AuthProtector/auth");
const {
  //   getAllIngredient,
  //   getSpecificIngedient,
  addIngredient,
  //   deleteIngredient,
} = require("../../Controller/IngredientController/IngredientController");

// router.route("/all").get(authMiddleWare, getAllIngredient);
// router.route("/specific").get(getSpecificIngedient);
router.route("/create").post(authMiddleWare, addIngredient);
// router.route("/delete:id").delete(deleteIngredient);

module.exports = router;
