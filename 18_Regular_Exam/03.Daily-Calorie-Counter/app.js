document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#form");
    const addMealButton = document.querySelector("#add-meal");
    const editMealButton = document.querySelector("#edit-meal");
    const loadMealsButton = document.querySelector("#load-meals");
    const listContainer = document.querySelector("#list");

    addMealButton.addEventListener("click", addMeal);
    editMealButton.addEventListener("click", editMeal);
    loadMealsButton.addEventListener("click", loadMeals);
    listContainer.addEventListener("click", handleMealButtons);

    let editedMealId = null;

    async function addMeal(event) {
        event.preventDefault();
        const food = document.querySelector("#food").value;
        const time = document.querySelector("#time").value;
        const calories = document.querySelector("#calories").value;

        try {
            const url = editedMealId
                ? `http://localhost:3030/jsonstore/tasks/${editedMealId}`
                : "http://localhost:3030/jsonstore/tasks/";

            const method = editedMealId ? "PUT" : "POST";

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ food, time, calories }),
            });

            if (!response.ok) {
                throw new Error(editedMealId ? "Failed to edit meal." : "Failed to add meal.");
            }

            document.querySelector("#food").value = "";
            document.querySelector("#time").value = "";
            document.querySelector("#calories").value = "";

            editedMealId = null;

            await loadMeals();

            editMealButton.disabled = true;
            addMealButton.disabled = false;
        } catch (error) {
            console.error("Error adding/editing meal:", error.message);
        }
    }

    async function editMeal() {
        const food = document.querySelector("#food").value;
        const time = document.querySelector("#time").value;
        const calories = document.querySelector("#calories").value;

        if (editedMealId) {
            try {
                const response = await fetch(`http://localhost:3030/jsonstore/tasks/${editedMealId}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ food, time, calories }),
                });

                if (!response.ok) {
                    throw new Error("Failed to edit meal.");
                }

                await loadMeals();

                document.querySelector("#food").value = "";
                document.querySelector("#time").value = "";
                document.querySelector("#calories").value = "";

                editMealButton.disabled = true;
                addMealButton.disabled = false;

                editedMealId = null;
            } catch (error) {
                console.error("Error editing meal:", error.message);
            }
        }
    }

    async function loadMeals() {
        try {
            const response = await fetch("http://localhost:3030/jsonstore/tasks/");
            if (!response.ok) {
                throw new Error("Failed to load meals.");
            }

            const data = await response.json();

            listContainer.innerHTML = "";

            Object.values(data).forEach((meal) => {
                const mealElement = createMealElement(meal);
                listContainer.appendChild(mealElement);
            });

            editMealButton.disabled = true;
        } catch (error) {
            console.error("Error loading meals:", error.message);
        }
    }

    async function deleteMeal(mealId) {
        try {
            const response = await fetch(`http://localhost:3030/jsonstore/tasks/${mealId}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Failed to delete meal.");
            }

            await loadMeals();
        } catch (error) {
            console.error("Error deleting meal:", error.message);
        }
    }

    function createMealElement(meal) {
        const mealElement = document.createElement("div");
        mealElement.classList.add("meal");
        mealElement.dataset.id = meal._id;

        const foodElement = document.createElement("h2");
        foodElement.textContent = meal.food;

        const timeElement = document.createElement("h3");
        timeElement.textContent = meal.time;

        const caloriesElement = document.createElement("h3");
        caloriesElement.textContent = meal.calories;

        const mealButtons = document.createElement("div");
        mealButtons.id = "meal-buttons";

        const changeButton = document.createElement("button");
        changeButton.classList.add("change-meal");
        changeButton.textContent = "Change";

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-meal");
        deleteButton.textContent = "Delete";

        mealButtons.appendChild(changeButton);
        mealButtons.appendChild(deleteButton);

        mealElement.appendChild(foodElement);
        mealElement.appendChild(timeElement);
        mealElement.appendChild(caloriesElement);
        mealElement.appendChild(mealButtons);

        return mealElement;
    }

    function handleMealButtons(event) {
        const targetButton = event.target;

        if (targetButton.classList.contains("change-meal")) {
            const selectedMeal = document.querySelector(".selected-meal");
            if (selectedMeal) {
                selectedMeal.classList.remove("selected-meal");
            }

            const mealElement = targetButton.closest(".meal");
            mealElement.classList.add("selected-meal");

            document.querySelector("#food").value = mealElement.querySelector("h2").textContent;
            document.querySelector("#time").value = mealElement.querySelector("h3:nth-child(2)").textContent;
            document.querySelector("#calories").value = mealElement.querySelector("h3:nth-child(3)").textContent;

            editMealButton.disabled = false;
            addMealButton.disabled = true;

            editedMealId = mealElement.dataset.id;
        } else if (targetButton.classList.contains("delete-meal")) {
            const mealId = targetButton.closest(".meal").dataset.id;

            deleteMeal(mealId);
        }
    }
});
