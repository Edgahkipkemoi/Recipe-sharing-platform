document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById('viewRecipesBtn');
    if (button) {
        button.addEventListener('click', () => {
            window.location.href = '../pages/recipes.html';
        });
    }

    const favoritesContainer = document.getElementById("favorites");
    const apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

    // Check if weekly meals already exist in localStorage
    let cachedMeals = localStorage.getItem("weeklyMeals");

    if (cachedMeals) {
        // Use cached meals
        const meals = JSON.parse(cachedMeals);
        displayMeals(meals);
    } else {
        // Fetch new meals and cache them
        let meals = [];
        let fetchedCount = 0;

        for (let i = 0; i < 4; i++) {
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    if (data.meals && data.meals[0]) {
                        meals.push(data.meals[0]);
                        fetchedCount++;

                        if (fetchedCount === 4) {
                            localStorage.setItem("weeklyMeals", JSON.stringify(meals));
                            displayMeals(meals);
                        }
                    }
                })
                .catch(error => console.error("Error fetching meals:", error));
        }
    }

    // Display meals
    function displayMeals(meals) {
        favoritesContainer.innerHTML = ''; // Clear old content
        meals.forEach(meal => {
            const mealDiv = document.createElement("div");
            mealDiv.classList.add("meal");

            const mealImage = document.createElement("img");
            mealImage.src = meal.strMealThumb;
            mealImage.alt = meal.strMeal;
            mealImage.classList.add("meal-image");

            const mealTitle = document.createElement("h3");
            mealTitle.innerText = meal.strMeal;

            const mealDescription = document.createElement("p");
            mealDescription.innerText = meal.strInstructions.slice(0, 100) + "...";

            mealDiv.appendChild(mealImage);
            mealDiv.appendChild(mealTitle);
            mealDiv.appendChild(mealDescription);

            // 👉 Use a separate key and redirect to weekly-meal.html
            mealDiv.addEventListener("click", () => {
                localStorage.setItem("selectedWeeklyMeal", JSON.stringify(meal));
                window.location.href = "weekly-meal.html";
            });

            favoritesContainer.appendChild(mealDiv);
        });
    }
});
