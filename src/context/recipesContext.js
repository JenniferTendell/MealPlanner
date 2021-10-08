import { createContext } from "react";
import { recipes } from "../assets/recipes";

// Create context
export const RecipesContext = createContext();

// Context provider
const RecipesProvider = ({ children }) => {

    const allRecipes = recipes;
    let weekRecipes = [];



    /* FUNKTIONER
    Söka på recept
    Kategorisera recept + Lägg till favoriter
    Lägga till favoriter
    Visa/lägg till/ta bort valda recept för veckan
    Sammanställ veckans ingredienser.
    */

    function addRecipeToMealPlan(recipeTitle) {
        const recipe = allRecipes.find(recipe => recipe.title === recipeTitle);
        weekRecipes.push(recipe);
    };


    return(
        <RecipesContext.Provider value={{
            allRecipes,
            weekRecipes,
            addRecipeToMealPlan,
        }}>
            { children }
        </RecipesContext.Provider>
    )
};

export default RecipesProvider;