const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxLenght: 500,
  },
  steps: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    default: "",
  },
  likes: {
    type: Number,
    default: 0,
  },
  favourite: {
    type: Boolean,
    default: false,
  },
  ingredients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ingredient",
      required: true,
    },
  ],
  rating: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Rating",
  },

  comment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
