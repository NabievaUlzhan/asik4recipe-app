const id = window.location.pathname.split('/')[4];
const card = document.querySelector('.recipeById__card')

axios.get(`/api/recipes/data/${id}`)
  .then(res => {
    const recipe = res.data

    card.innerHTML = "";
    card.innerHTML = `
      <div class="recipe__card">
        <h5 class="name">${recipe.name}</h5>
        <ul>
          
        </ul>
        <div id="flex">
          <p>Type: ${recipe.type}</p>
          <p>Cooking time: ${recipe.cookingTime}</p>   
        </div>
        
        <div id="flex">
          <p>Category: ${recipe.category}</p>
        </div>
        
        <div id="flex">
          <p>Cuisine: ${recipe.cuisine}</p>
        </div>
        <div class="recipe__card-center">
          <div class="recipe__card-dif">${recipe.difficulty}</div>
          <img id="star" src="https://www.svgrepo.com/show/452106/star.svg" alt="">
        </div>

        <button onclick="updateRecipe('${recipe._id}')">Update</button>
        <button onclick="deleteRecipe('${recipe._id}')">Delete</button>
      </div>
    `
    })
  .catch(err => console.error(err));

function updateRecipe(id) {
  window.location.href = `/api/updateRecipe?id=${id}`;
}

function deleteRecipe(id) {
  axios.delete(`/api/recipes/${id}`)
    .then(() => location.reload());
}