const mongoose = require("mongoose");
const Ingredient = require("../../Model/IngredientModel/ingredientModel");
const Recipe = require("../../Model/RecipeModel/RecipeModel");
const errorHandle = require("../../util/Error");

// create recipe
const createRecipe = async (req, res, next) => {
  try {
    let { title, description, steps, img, ingredients } = req.body;
    const user = req.user.id;

    if (!mongoose.isValidObjectId(user)) {
      return next(errorHandle(401, "invalid id"));
    }

    const recipe = await Recipe.create({
      title,
      description,
      steps,
      img,
      author: user,
    });

    if (!recipe) {
      return next(errorHandle(401, "recipe is not created"));
    }

    // creating ingredient
    const createIngredient = await Promise.all(
      ingredients.map((ing) => {
        return Ingredient.create({
          ...ing,
          recipeId: recipe._id,
          author: user,
        });
      })
    );

    recipe.ingredients = createIngredient.map((ing) => ing._id);

    recipe.save();

    const sendRecipe = await Recipe.findById(recipe._id).populate(
      "ingredients"
    );

    return res.status(200).json({
      status: true,
      msg: "recipe is successfully created",
      sendRecipe,
    });
  } catch (error) {
    console.log(error);
    return next(errorHandle(error));
  }
};

// Get all Recipes
const getRecipes = async (req, res, next) => {
  try {
    const user = req.user.id;

    if (!mongoose.isValidObjectId(user)) {
      return next(errorHandle(401, "invalid id"));
    }

    const allRecipe = await Recipe.findOne({
      author: user,
    }).populate("ingredients");

    if (!allRecipe) {
      return next(errorHandle(401, "no recipe"));
    }

    return res.status(200).json({
      status: true,
      msg: "all recipe",
      allRecipe,
    });
  } catch (error) {
    console.log(error);
    return next(errorHandle(error));
  }
};

// get specific recipe by id
const getSpecificRecipe = async (req, res, next) => {
  try {
    const recipeId = req.params.id;
    const user = req.user.id;

    if (
      !mongoose.isValidObjectId(user) ||
      !mongoose.isValidObjectId(recipeId)
    ) {
      return next(errorHandle(401, "invalid id"));
    }

    const getSpecificRecipe = await Recipe.findOne({
      _id: recipeId,
      author: user,
    }).populate("ingredients");

    if (!getSpecificRecipe) {
      return next(errorHandle(401, "no recipe with this id"));
    }

    return res.status(200).json({
      status: true,
      msg: "specific recipe",
      getSpecificRecipe,
    });
  } catch (error) {
    console.log(error);
    return next(errorHandle(error));
  }
};

module.exports = {
  createRecipe,
  getRecipes,
  getSpecificRecipe,
  //   deleteRecipe,
  //   updateRecipe,
};
