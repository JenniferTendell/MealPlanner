import { Button, makeStyles } from "@material-ui/core";
import { useContext } from "react";
import { RecipesContext } from "../../context/recipesContext";

export default function PrimaryButton({ text, color, recipeTitle }) {
    const style = styles();
    const { checkIfRecipeExistInMealPlan, removeRecipeFromMealPlan } = useContext(RecipesContext)

    const handleClick = () => {
        if (recipeTitle) {
            if (text === 'Lägg till') {
                checkIfRecipeExistInMealPlan(recipeTitle);
            } else {
                removeRecipeFromMealPlan(recipeTitle);
            }
        };
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
