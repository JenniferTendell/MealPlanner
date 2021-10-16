import { createContext, useState } from "react";
import { recipes } from "../assets/recipes";

// Create context
export const RecipesContext = createContext();

// Context provider
const RecipesProvider = ({ children }) => {
    
    const initializeMealPlanner = () => {
        const mealPlanner = localStorage.getItem('mealPlanner');
        if (mealPlanner) {
            return JSON.parse(mealPlanner);
        };
        return [];
    };

    const checkIfRecipeExistInMealPlan = (recipeTitle) => {
        const RecipeToAdd = mealPlanRecipes.find(recipe => recipe.title === recipeTitle);
        const recipeExist = mealPlanRecipes.includes(RecipeToAdd);
        
        if (!recipeExist) {
            addRecipeToMealPlan(recipeTitle);
        } 
    };

    const addRecipeToMealPlan = (recipeTitle) => {
        const recipeToAdd = allRecipes.find(recipe => recipe.title === recipeTitle);
        let updatedRecipes = [...mealPlanRecipes, recipeToAdd];

        setMealPlanRecipes(updatedRecipes);
        updateMealPlanRecipesInLocalStorage(updatedRecipes);    
    };
    
    const removeRecipeFromMealPlan = (recipeTitle) => {
        const recipeToRemove = allRecipes.find(recipe => recipe.title === recipeTitle);
        const updatedRecipes = [...mealPlanRecipes];

        const index = updatedRecipes.indexOf(recipeToRemove);
        if (index > -1) {
            updatedRecipes.splice(index, 1);
        };

        setMealPlanRecipes(updatedRecipes);
        updateMealPlanRecipesInLocalStorage(updatedRecipes);
    };
    
    const updateMealPlanRecipesInLocalStorage = (updatedRecipes) => {
        window.localStorage.setItem('mealPlanner', JSON.stringify(updatedRecipes));
    };

    /* FUNKTIONER
    Söka på recept
    Kategorisera recept + Lägg till favoriter
    Lägga till favoriter
    ta bort valda recept för veckan
    Sammanställ veckans ingredienser.
    */

    const allRecipes = recipes;
    const [mealPlanRecipes, setMealPlanRecipes] = useState(initializeMealPlanner());

    return(
        <RecipesContext.Provider value={{
            allRecipes,
            mealPlanRecipes,
            addRecipeToMealPlan,
            checkIfRecipeExistInMealPlan,
            removeRecipeFromMealPlan,
        }}>
            { children }
        </RecipesContext.Provider>
    )
};

export default RecipesProvider;