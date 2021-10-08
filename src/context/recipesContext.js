import { createContext } from "react";
import { recipes } from "../assets/recipes";

// Create context
export const RecipesContext = createContext();

// Context provider
const RecipesProvider = ({ children }) => {

    const allRecipes = recipes;
    let mealPlannerRecipes = [];



    /* FUNKTIONER
    Söka på recept
    Kategorisera recept + Lägg till favoriter
    Lägga till favoriter
    Visa/lägg till/ta bort valda recept för veckan
    Sammanställ veckans ingredienser.
    */

    function addRecipeToMealPlan(recipeTitle) {
        const recipe = allRecipes.find(recipe => recipe.title === recipeTitle);
        mealPlannerRecipes.push(recipe);
        //window.localStorage.setItem('mealPlanner', mealPlannerRecipes);
    };


    return(
        <RecipesContext.Provider value={{
            allRecipes,
            mealPlannerRecipes,
            addRecipeToMealPlan,
        }}>
            { children }
        </RecipesContext.Provider>
    )
};

export default RecipesProvider;