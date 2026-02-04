const id = new URLSearchParams(window.location.search).get("id");

const name = document.getElementById("name");
const cuisine = document.getElementById("cuisine");
const type = document.getElementById("type");
const cookingTime = document.getElementById("cookingTime");
const difficulty = document.getElementById("difficulty");
const category = document.getElementById("category");
const ingredients = document.getElementById("ingredients");
const instructions = document.getElementById("instructions");
const form = document.getElementById("form");

axios.get(`/api/recipes/data/${id}`)
  .then(res => {
    const r = res.data;
    name.value = r.name;
    cuisine.value = r.cuisine;
    type.value = r.type;
    cookingTime.value = r.cookingTime;
    difficulty.value = r.difficulty;
    category.value = r.category;
    ingredients.value = r.ingredients;
    instructions.value = r.instructions;
  })
  .catch(err => console.error(err));

form.addEventListener("submit", e => {
  e.preventDefault();

  axios.put(`/api/recipes/${id}`, {
    name: name.value,
    cuisine: cuisine.value,
    type: type.value,
    cookingTime: cookingTime.value,
    difficulty: difficulty.value,
    category: category.value,
    ingredients: ingredients.value,
    instructions: instructions.value
  })
  .then(() => window.location.href = "/api/recipes")
  .catch(err => console.error(err));
});