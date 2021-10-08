import { Button, makeStyles } from "@material-ui/core";
import { useContext } from "react";
import { RecipesContext } from "../../context/recipesContext";

export default function PrimaryButton(props) {
    const style = styles();
    const { text, color, recipeTitle } = props;
    const { mealPlanRecipes, addRecipeToMealPlan } = useContext(RecipesContext)

    const handleClick = () => {
        if (recipeTitle) {
            checkIfRecipeExistInMealPlan()
        }
    };
    
    const checkIfRecipeExistInMealPlan = () => {
        const RecipeToAdd = mealPlanRecipes.find(recipe => recipe.title === recipeTitle);
        const recipeExist = mealPlanRecipes.includes(RecipeToAdd);
        
        if (!recipeExist) {
            addRecipeToMealPlan(recipeTitle);
        } 
    };
    
    return (
        <Button
            variant='contained'
            color={ color }
            className={style.button}
            onClick={handleClick}
        >
            { text }
        </Button>
    )
};

const styles = makeStyles((theme) => ({
    button: {
        height: '3rem',
        width: '14rem',
        color: 'white',
        fontSize: '1.2rem',
        margin: '0 auto',
    }
}))
