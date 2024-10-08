const express = require("express");
const router = express.Router();

// auth-protector
const authMiddleWare = require("../../Middleware/AuthProtector/auth");

const {
  createRecipe,
  getRecipes,
  getSpecificRecipe,
  deleteRecipe,
  updateRecipe,
} = require("../../Controller/RecipeController/RecipeController");

router.route("/create").post(authMiddleWare, createRecipe);
router.route("/all").get(authMiddleWare, getRecipes);
router.route("/specific/:id").get(authMiddleWare, getSpecificRecipe);
router.route("/delete/:id").delete(authMiddleWare, deleteRecipe);
router.route("/update/:id").put(authMiddleWare, updateRecipe);

module.exports = router;
