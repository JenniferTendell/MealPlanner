import { createContext, useEffect, useState } from "react";
import { recipes } from "../assets/recipes";

// Create context
export const RecipesContext = createContext();

// Context provider
const RecipesProvider = ({ children }) => { 

     /* FUNKTIONER
        Söka på recept
        Kategorisera recept + Lägg till favoriter
        Lägga till favoriter
    */

    const initializeMealPlanner = () => {
        const mealPlanner = localStorage.getItem('mealPlanner');
        if (mealPlanner) {
            return JSON.parse(mealPlanner);
        };
        return [];
    };

    const addRecipeToMealPlan = (recipeTitle) => {
        const recipeToAdd = allRecipes.find(recipe => recipe.title === recipeTitle);
        const updatedRecipes = [...mealPlanRecipes, recipeToAdd];

        setMealPlanRecipes(updatedRecipes);
        updateMealPlanRecipesInLocalStorage(updatedRecipes);
        updateShoppingList(updatedRecipes);  
    };
    
    const removeRecipeFromMealPlan = (recipeTitle) => {
        const recipeToRemove = mealPlanRecipes.find(recipe => recipe.title === recipeTitle);
        const updatedRecipes = [...mealPlanRecipes];

        const index = updatedRecipes.indexOf(recipeToRemove);
        if (index > -1) {
            updatedRecipes.splice(index, 1);
        };

        setMealPlanRecipes(updatedRecipes);
        updateMealPlanRecipesInLocalStorage(updatedRecipes);
        updateShoppingList(updatedRecipes);
    };
    
    const updateMealPlanRecipesInLocalStorage = (updatedRecipes) => {
        window.localStorage.setItem('mealPlanner', JSON.stringify(updatedRecipes));
    };

    const updateShoppingList = (updatedRecipes) => {
        let newShoppingList = [];

        updatedRecipes.forEach(recipe => {
            recipe.ingredients.forEach(ingredient => {
                
                const ingredientExist = newShoppingList.find(shoppingItem => shoppingItem.ingredient === ingredient[2])
                
                if (ingredientExist) {
                    if (ingredientExist.value === ingredient[1]) {
                        ingredientExist.quantity += ingredient[0]
                    } else {
                        newShoppingList = [ 
                            ...newShoppingList, 
                            { 
                                quantity: ingredient[0], 
                                value: ingredient[1], 
                                ingredient: ingredient[2] 
                            },
                        ];
                    }
                } else {
                    newShoppingList = [ 
                        ...newShoppingList, 
                        { 
                            quantity: ingredient[0], 
                            value: ingredient[1], 
                            ingredient: ingredient[2] 
                        },
                    ];
                }
            })
        })
        setShoppingList(newShoppingList); 
    };

    const allRecipes = recipes;
    const [mealPlanRecipes, setMealPlanRecipes] = useState(initializeMealPlanner());
    const [shoppingList, setShoppingList] = useState([]);

    useEffect(() => {
        updateShoppingList(mealPlanRecipes)
    }, [mealPlanRecipes])

    /* Design context */
    const [activePage, setActivePage] = useState('')

    return(
        <RecipesContext.Provider value={{
            allRecipes,
            mealPlanRecipes,
            shoppingList,
            addRecipeToMealPlan,
            removeRecipeFromMealPlan,
            setActivePage,
            activePage,
        }}>
            { children }
        </RecipesContext.Provider>
    )
};

export default RecipesProvider;