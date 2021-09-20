import { Grid, makeStyles } from "@material-ui/core";
import { useContext } from "react";
import { RecipesContext } from "../../context/recipesContext";
import GoBackButton from "../DesignComponents/GoBackButton";
import RecipeInfo from "./RecipeInfo";
import RecipeImage from "./RecipeImage";
import RecipeIngredients from "./RecipeIngredients";
import RecipeInstructions from "./RecipeInstructions";

export default function SpecificRecipePage() {
    const style = styles();
    const { allRecipes } = useContext(RecipesContext)
    
    const recipeId = window.location.href.slice(-1);
    const recipe = allRecipes.find(recipe => recipe.id === recipeId)


    return (
        <main className={style.root}>  
            <Grid container className={style.grid}>
                <Grid item>
                    <GoBackButton />
                </Grid>
                <Grid item>
                    <RecipeInfo />
                </Grid>
                <Grid item>
                    <RecipeImage />
                </Grid>
                <Grid item>
                    <RecipeIngredients />
                </Grid>
                <Grid item>
                    <RecipeInstructions />
                </Grid>
            </Grid>    
        </main>
    )
};

const styles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
    },
    grid: {
        width: '100%',
        maxWidth: '80rem',
        margin: '0 auto',
    },
}))
