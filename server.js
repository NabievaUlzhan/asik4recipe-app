require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const session = require("express-session")

const recipeRoutes = require("./routes/recipeRoutes")
const authRoutes = require("./routes/authRoutes")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static("public"))
app.use("/uploads", express.static("uploads"))

app.use(
  session({
    name: "sessionId",
    secret: process.env.SESSION_SECRET || "secret123",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,  
      secure: false,  
      maxAge: 1000 * 60 * 60
    }
  })
)

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "homePage.html"))
})

app.get("/api/recipes", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "recipes.html"))
})

app.get("/api/recipes/getOne/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "recipeById.html"))
})

app.get("/api/createRecipe", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "createRecipe.html"))
})

app.get("/api/updateRecipe", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "updateRecipe.html"))
})

app.get("/api/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"))
})

app.get("/api/favourites", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "favourites.html"))
})

app.use("/api", recipeRoutes)
app.use("/auth", authRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})