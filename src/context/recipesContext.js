import { createContext } from "react";
import { recipes } from "../assets/recipes";

// Create context
export const RecipesContext = createContext();

// Context provider
const RecipesProvider = ({ children }) => {

    const allRecipes = recipes;


    return(
        <RecipesContext.Provider value={{
            allRecipes,

        }}>
            { children }
        </RecipesContext.Provider>
    )
};

export default RecipesProvider;