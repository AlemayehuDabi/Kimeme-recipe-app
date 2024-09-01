const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ingName: {
      type: String,
      required: true,
    },
    nutType: {
      cal: {
        type: Number,
      },
      protein: {
        type: Number,
      },
      carbs: {
        type: Number,
      },
      fats: {
        type: Number,
      },
    },
    recipeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Ingredient =
  mongoose.models.Ingredient || mongoose.model("Ingredient", ingredientSchema);

module.exports = Ingredient;
