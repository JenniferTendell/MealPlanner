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
    
    const recipeId = window.location.href.split('/')[4];
    const recipe = allRecipes.find(recipe => recipe.id === recipeId)

    return (
        <main className={style.root}>  
            <Grid container className={style.grid} justifyContent='center' spacing={3}>
                <Grid item xs={12}>
                    <GoBackButton />
                </Grid>
                <Grid item xs={6}>
                    <RecipeInfo recipe={recipe}/>
                </Grid>
                <Grid item xs={6}>
                    <RecipeImage recipe={recipe}/>
                </Grid>
                <Grid item xs={6}>
                    <RecipeIngredients recipe={recipe}/>
                </Grid>
                <Grid item xs={6}>
                    <RecipeInstructions recipe={recipe}/>
                </Grid>
            </Grid>    
        </main>
    )
};

const styles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        marginBottom: '3rem',
    },
    grid: {
        width: '100%',
        maxWidth: '80rem',
        margin: '0 auto',
    },
}))
