document.addEventListener("DOMContentLoaded", () => {
    const meal = JSON.parse(localStorage.getItem("selectedWeeklyMeal"));

    if (!meal) {
        document.body.innerHTML = "<p>No weekly meal selected.</p>";
        return;
    }

    document.getElementById("meal-title").textContent = meal.strMeal;
    document.getElementById("meal-image").src = meal.strMealThumb;
    document.getElementById("meal-image").alt = meal.strMeal;

    const instructionsContainer = document.getElementById("meal-instructions");
    const steps = meal.strInstructions.split(/[\r\n]+/).filter(step => step.trim() !== "");

    steps.forEach(step => {
        const li = document.createElement("li");
        li.textContent = step.trim();
        instructionsContainer.appendChild(li);
    });

    const ingredientsList = document.getElementById("meal-ingredients");
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient && ingredient.trim()) {
            const li = document.createElement("li");
            li.textContent = `${ingredient} - ${measure}`;
            ingredientsList.appendChild(li);
        }
    }
});
