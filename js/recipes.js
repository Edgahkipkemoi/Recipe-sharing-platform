document.addEventListener("DOMContentLoaded", () => {
  const favoritesContainer = document.getElementById("favorites");
  const searchInput = document.getElementById("search");

  // Display Meals
  function displayMeals(meals) {
    favoritesContainer.innerHTML = "";
    
    // Limit the meals to 8
    const limitedMeals = meals.slice(0, 7); // Only take the first 8 meals

    limitedMeals.forEach(meal => {
      const div = document.createElement("div");
      div.classList.add("meal-card");

      div.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
        <h3>${meal.strMeal}</h3>
        <p>${meal.strInstructions.slice(0, 60)}...</p>
      `;

      // Redirect and store meal
      div.querySelector("img").addEventListener("click", () => {
        localStorage.setItem("selectedMeal", JSON.stringify(meal));
        window.location.href = "meal-detail.html";
      });

      favoritesContainer.appendChild(div);
    });
  }

  // Fetch meals
  async function loadMeals(query = "") {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await res.json();
      if (data.meals) {
        displayMeals(data.meals);
      } else {
        favoritesContainer.innerHTML = "<p>No meals found.</p>";
      }
    } catch (err) {
      favoritesContainer.innerHTML = "<p>Error loading meals.</p>";
      console.error(err);
    }
  }

  // Initial load
  loadMeals();

  // Live Search
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim();
    loadMeals(query);
  });
});
