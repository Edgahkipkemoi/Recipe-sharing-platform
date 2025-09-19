# 🍴 Recipe Sharing Platform

A simple recipe sharing web app where users can view detailed meal information including **title, image, ingredients, and cooking instructions**. The app dynamically fetches and displays recipe data stored in the browser’s `localStorage`.

---

## 🚀 Features
- Display a **selected meal** with title and thumbnail image.  
- Show a **step-by-step instruction list**.  
- List up to **20 ingredients with their corresponding measurements**.  
- Handles cases where no meal is selected (fallback message).  

---

## 🧑‍💻 How It Works
The provided JavaScript code listens for the `DOMContentLoaded` event to ensure the DOM is fully loaded before running.  

1. **Retrieve Meal Data**  
   - The selected recipe is retrieved from `localStorage` under the key `selectedMeal`.  
   - If no meal is found, a simple message is shown: *"No meal selected."*

2. **Display Meal Title and Image**  
   - The meal’s name and image are rendered inside the appropriate elements (`#meal-title` and `#meal-image`).

3. **Show Instructions as Numbered Steps**  
   - Instructions are split by newlines and converted into an ordered list (`<li>` items).

4. **List Ingredients and Measurements**  
   - Up to 20 ingredients are checked dynamically (`strIngredient1` ... `strIngredient20`).  
   - If available, each ingredient is paired with its measurement and displayed in the ingredients list.  

---

## 📂 Project Structure

/project-root
│── index.html # Main page to display meal details
│── script.js # JavaScript logic (the provided code)
│── styles.css # Optional styling
│── README.md # Documentation


---

## ⚡ Usage
1. Save a meal object into `localStorage` (usually done via a meal search or selection page). Example:
   ```js
   localStorage.setItem("selectedMeal", JSON.stringify({
     strMeal: "Spaghetti Carbonara",
     strMealThumb: "https://www.example.com/carbonara.jpg",
     strInstructions: "Boil pasta...\nCook bacon...\nMix with eggs and cheese...",
     strIngredient1: "Spaghetti",
     strMeasure1: "200g",
     strIngredient2: "Bacon",
     strMeasure2: "100g"
   }));


Open the details page (index.html).

The script will automatically populate the meal details into the page.

🛠️ Technologies Used

HTML5 – structure

CSS3 – styling

JavaScript (ES6) – dynamic rendering and DOM manipulation

LocalStorage – storing and retrieving meal data

🌟 Future Improvements

Add a search and browse feature for recipes.

Save and manage favorite recipes.

Enable sharing recipes via links or QR codes.

Responsive mobile-friendly UI.
