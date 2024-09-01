const express = require("express");
const router = express.Router();
const authMiddleWare = require("../../Middleware/AuthProtector/auth");
const {
  getIngredient,
  addIngredient,
  //   deleteIngredient,
} = require("../../Controller/IngredientController/IngredientController");

router.route("/of-specific-recipe/:id").get(authMiddleWare, getIngredient);

router.route("/create/:id").post(authMiddleWare, addIngredient);
// router.route("/delete/:id").delete(deleteIngredient);

module.exports = router;
