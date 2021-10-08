import { Button, makeStyles } from "@material-ui/core";
import { useContext } from "react";
import { RecipesContext } from "../../context/recipesContext";

export default function PrimaryButton(props) {
    const style = styles();
    const { text, color, recipeTitle } = props;
    const { addRecipeToMealPlan } = useContext(RecipesContext)

    function handleClick() {
        if (recipeTitle) {
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
