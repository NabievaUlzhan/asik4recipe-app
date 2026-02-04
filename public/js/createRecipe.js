document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const cuisine = document.getElementById("cuisine").value;
  const type = document.getElementById("type").value;
  const cookingTime = document.getElementById("cookingTime").value;
  const difficulty = document.getElementById("difficulty").value;
  const category = document.getElementById("category").value;
  const ingredients = document.getElementById("ingredients").value;
  const instructions = document.getElementById("instructions").value;

  axios.post("/api/recipes", {
    name,
    cuisine,
    type,
    cookingTime,
    difficulty,
    category,
    ingredients,
    instructions
  })
  .then(() => {
    window.location.href = "/api/recipes";
  })
  .catch(err => {
    console.error(err);
    alert("Error creating recipe");
  });
});