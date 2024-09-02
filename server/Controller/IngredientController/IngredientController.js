const mongoose = require("mongoose");
const Ingredient = require("../../Model/IngredientModel/ingredientModel");
const errorHandle = require("../../util/Error");

// add ingredient
const addIngredient = async (req, res, next) => {
  const user = req.user.id;
  const RecipeId = req.params.id;
  const { ingName, nutType } = req.body;

  try {
    if (
      !mongoose.isValidObjectId(user) ||
      !mongoose.isValidObjectId(RecipeId)
    ) {
      return next(errorHandle(401, "Invalid id"));
    }

    if (!RecipeId) {
      return next(errorHandle(401, "recipe id required"));
    }

    if (!ingName) {
      return next(errorHandle(401, "ingredient name is required"));
    }

    const ingAdd = await Ingredient.create({
      author: user,
      recipeId: RecipeId,
      nutType,
      ingName,
    });

    if (!ingAdd) {
      return next(errorHandle(401, "ingredient is not created"));
    }

    return res.status(200).json({
      status: false,
      msg: "ingredient is created successful",
      ingAdd,
    });
  } catch (error) {
    return next(error);
  }
};

// get ingredient
const getIngredient = async (req, res, next) => {
  const recipeId = req.params.id;
  const user = req.user.id;

  try {
    if (
      !mongoose.isValidObjectId(recipeId) ||
      !mongoose.isValidObjectId(user)
    ) {
      return next(errorHandle(401, "invalid id"));
    }

    if (!recipeId) {
      return next(errorHandle(401, "ingredient id is required"));
    }

    const ingredient = await Ingredient.find({
      recipeId: recipeId,
      author: user,
    });

    if (!ingredient) {
      return next(errorHandle(401, "ingredient is not found"));
    }

    return res.status(200).json({
      status: true,
      msg: "specific ingredient",
      ingredient,
    });
  } catch (error) {
    return next(error);
  }
};

// delete ingredient
const deleteIngredient = async (req, res) => {
  const ingredientId = req.params.ingredientId;
  const recipeId = req.params.recipeId;
  const user = req.user.id;

  try {
    if (
      !mongoose.isValidObjectId(ingredientId) ||
      !mongoose.isValidObjectId(user) ||
      !mongoose.isValidObjectId(recipeId)
    ) {
      return next(errorHandle(401, "invalid id"));
    }

    if (!ingredientId || recipeId) {
      return next(
        errorHandle(401, "id of the recipe and ingredient is required")
      );
    }

    const ingredient = await Ingredient.findOne({
      _id: ingredientId,
      recipeId: recipeId,
      author: user,
    });

    if (!ingredient) {
      return next(errorHandle(401, "ingredient does not exist"));
    }

    const deletedIngredient = await Ingredient.deleteOne({
      _id: ingredientId,
      author: user,
    });

    return res.json({
      status: true,
      msg: "ingredient successfuly deleted",
      deletedIngredient,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = {
  addIngredient,
  getIngredient,
  deleteIngredient,
};
