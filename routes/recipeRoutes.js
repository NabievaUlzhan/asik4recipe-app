const express = require("express")
const recipeController = require("../controllers/recipeController")
const authMiddleware = require("../middleware/authMiddleware")
const router = express.Router()

router.post("/recipes", authMiddleware, recipeController.createRecipe)
router.put("/recipes/:id", authMiddleware, recipeController.updateRecipe)
router.delete("/recipes/:id", authMiddleware, recipeController.deleteRecipe)

router.get("/recipes/data", recipeController.getAllRecipes)
router.get("/recipes/data/:id", recipeController.getRecipeById)

// router.post("/recipes", recipeController.createRecipe)
// router.put("/recipes/:id", recipeController.updateRecipe)
// router.delete("/recipes/:id", recipeController.deleteRecipe)

module.exports = router