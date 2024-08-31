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
    return next(error);
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
    return next(error);
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

    if (!recipeId) {
      return next(errorHandle(401, "recipe-id is required"));
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
    return next(error);
  }
};

// delete specific recipe
const deleteRecipe = async (req, res, next) => {
  const user = req.user.id;
  const recipeId = req.params.id;

  try {
    if (
      !mongoose.isValidObjectId(user) ||
      !mongoose.isValidObjectId(recipeId)
    ) {
      return next(errorHandle(401, "invalid id"));
    }

    if (!recipeId) {
      return next(errorHandle(400, "recipe-id is required"));
    }

    const recipe = await Recipe.findOne({
      _id: recipeId,
      author: user,
    });

    if (!recipe) {
      return next(errorHandle(400, "recipe is not found"));
    }

    const deletedRecipe = await Recipe.deleteOne(recipe);

    return res.status(200).json({
      status: true,
      msg: "recipe deleted successfully",
      deletedRecipe,
    });
  } catch (error) {
    next(error);
  }
};

// update specific recipe
const updateRecipe = async (req, res, next) => {
  try {
    const recipeId = req.params.id;
    const user = req.user.id;
    const { title, description, steps } = req.body;

    if (
      !mongoose.isValidObjectId(user) ||
      !mongoose.isValidObjectId(recipeId)
    ) {
      return next(errorHandle(401, "invalid id"));
    }

    if (!recipeId) {
      return next(errorHandle(401, "recipe id is required"));
    }

    const updatedRecipe = await Recipe.findOneAndUpdate(
      {
        _id: recipeId,
        author: user,
      },
      {
        title,
        description,
        steps,
      },
      {
        new: true,
      }
    );

    if (!updatedRecipe) {
      return next(errorHandle(401, "recipe is not found"));
    }

    return res.json({
      status: true,
      msg: "recipe updated successfully",
      updatedRecipe,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = {
  createRecipe,
  getRecipes,
  getSpecificRecipe,
  deleteRecipe,
  updateRecipe,
};
