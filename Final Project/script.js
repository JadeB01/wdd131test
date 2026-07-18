// Categories
const categories = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Sweets",
    "Drinks",
    "Holiday Meals"
];

// Recipe Data //
const recipes = [
    {
        name: "Chicken and Rice",
        category: "Dinner",
        difficulty: 3,
        time: 60,
        image: "images/chickenandrice.jpeg"
    },
    {
        name: "Chicken Tacorice",
        category: "Dinner",
        difficulty: 3,
        time: 60,
        image: "images/chickentacorice.jpeg"
    },
    {
        name: "Ground Chicken and Tofu",
        category: "Dinner",
        difficulty: 3,
        time: 45,
        image: "images/groundhcikenwithtofu.jpeg"
    },
    {
        name: "Pork Belly Miso Soup",
        category: "Lunch",
        difficulty: 3,
        time: 40,
        image: "images/porkmiso.jpeg"
    },
    {
        name: "Potatoes and Chicken",
        category: "Lunch",
        difficulty: 2,
        time: 45,
        image: "images/potatoesandchicken.jpeg"
    },
    {
        name: "Dad Approved Sandwich",
        category: "Lunch",
        difficulty: 1,
        time: 20,
        image: "images/sandwich.jpeg"
    },
    {
        name: "Taco Rice",
        category: "Dinner",
        difficulty: 2,
        time: 30,
        image: "images/tacorice.jpeg"
    },
    {
        name: "Tomato Bake with Eggplants and Chicken",
        category: "Dinner",
        difficulty: 3,
        time: 40,
        image: "images/tomatoeggplantchicken.jpeg"
    },
    {
        name: "Apple Crisp",
        category: "Sweets",
        difficulty: 3,
        time: 40,
        image: "images/apple-crisp.jpg"
    },
    {
        name: "German Gooseberry Cake",
        category: "Sweets",
        difficulty: 3,
        time: 40,
        image: "images/german-gooseberry-cake.jpg"
    },
    {
        name: "Sweet Potato Waffle",
        category: "Breakfast",
        difficulty: 2,
        time: 30,
        image: "images/sweet-potato-waffle-md.jpg"
    }

];

// HTML Elements IDs//
const categoryList = document.getElementById("categoryList");
const recipeContainer = document.getElementById("recipeContainer");
const pageTitle = document.getElementById("pageTitle");

//I asked AI with this, I did not know how to create stars for difficulties.//

function createStars(level) {

    let stars = "";

    for (let i = 1; i <= 5; i++) {

        if (i <= level) {
            stars += "★";
        }

        else {
            stars += "☆";
        }

    }

    return stars;

}

//Display recipes //

function displayRecipes(recipeArray) {
    recipeContainer.innerHTML = "";
    recipeArray.forEach(recipe => {
        const card = document.createElement("div");
        card.classList.add("recipe-card");

        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe-info">
                <h3>${recipe.name}</h3>
                <p>${createStars(recipe.difficulty)}</p>
                <p>${recipe.time} minutes</p>
            </div>
        `;

        recipeContainer.appendChild(card);

    });

}

//shuffling recipes//
function shuffleRecipes(array) {

    return [...array].sort(() => Math.random() - 0.5);

}
//show random recipes//
function showRandomRecipes() {

    pageTitle.textContent = "Random Recipes";

    const randomRecipes = shuffleRecipes(recipes);

    displayRecipes(randomRecipes);

}

//buttons for the category//
function createCategoryButtons() {

    categories.forEach(category => {

        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = category;
        button.addEventListener("click", () => {
            pageTitle.textContent = `${category} Recipes`;
            const filteredRecipes = recipes.filter(recipe => recipe.category === category);
            displayRecipes(filteredRecipes);
            document.querySelectorAll("#categoryList button").forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

        });

        li.appendChild(button);
        categoryList.appendChild(li);

    });

}

//add recipe button//
document.getElementById("addRecipeBtn").addEventListener("click", () => {
    window.location.href = "addRecipe.html";
});

//small screen content button//
const menuButton = document.getElementById("menuButton");
const sidebar = document.querySelector(".sidebar");

menuButton.addEventListener("click", () => {
    if (sidebar.style.display === "block") {

        sidebar.style.display = "none";

    }

    else {

        sidebar.style.display = "block";

    }

});


createCategoryButtons();

showRandomRecipes();