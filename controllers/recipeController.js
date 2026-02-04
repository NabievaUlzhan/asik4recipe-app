const Recipe = require("../models/Recipe")

exports.getAllRecipes = async (req, res) => {
  try {
    const filter = {};

    if (req.query.category) {
      filter.category = req.query.category;
    }

    const recipes = await Recipe.find(filter);
    res.json(recipes);

  } catch (err) {
    res.status(500).json({ message: "Failed to fetch recipes" });
  }
}

exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id)

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" })
    }

    res.json(recipe)
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch recipe" })
  }
}

exports.createRecipe = async (req, res) => {
  try {
    const recipe = new Recipe(req.body)
    await recipe.save()
    res.status(201).json(recipe)
  } catch (err) {
    res.status(400).json({ message: "Failed to create recipe" })
  }
}

exports.updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    if (!updatedRecipe) {
      return res.status(404).json({ message: "Recipe not found" })
    }

    res.json(updatedRecipe)
  } catch (err) {
    res.status(400).json({ message: "Failed to update recipe" })
  }
}

exports.deleteRecipe = async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id)
    res.json({ message: "Recipe deleted" })
  } catch (err) {
    res.status(500).json({ message: "Failed to delete recipe" })
  }
}