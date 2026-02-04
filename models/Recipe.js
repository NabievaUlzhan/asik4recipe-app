const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cuisine: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  cookingTime: {
    type: Number,
    required: false
  },
  difficulty: {
    type: String,
    required: false
  },
  category: {
    type: String,
    required: false
  },
  ingredients: {
    type: String,
    required: true
  },
  instructions: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Recipe", recipeSchema);
