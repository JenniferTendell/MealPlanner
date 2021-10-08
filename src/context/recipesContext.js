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

    const addRecipeToMealPlan = (recipeTitle) => {
        const recipe = allRecipes.find(recipe => recipe.title === recipeTitle);
        mealPlanRecipes.push(recipe);
        window.localStorage.setItem('mealPlanner', JSON.stringify(mealPlanRecipes));
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
        }}>
            { children }
        </RecipesContext.Provider>
    )
};

export default RecipesProvider;