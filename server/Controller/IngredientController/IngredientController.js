const mongoose = require("mongoose");
const Ingredient = require("../../Model/IngredientModel/IngredientModel");

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
    console.log(error);
    return next(error);
  }
};

module.exports = {
  addIngredient,
};
