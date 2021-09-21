import { Grid, makeStyles } from "@material-ui/core";
import MealsOverview from "../DesignComponents/MealsOverview";
import GoBackButton from "../DesignComponents/GoBackButton";
import PrimaryButton from "../DesignComponents/PrimaryButton";
import FilterRecipes from "./FilterRecipes";
import MealCard from "../DesignComponents/MealCard";
import { useContext } from "react";
import { RecipesContext } from "../../context/recipesContext";

export default function RecipesPage() {
    const style = styles();
    const { allRecipes } = useContext(RecipesContext)

    return (
        <main className={style.root}>  
            <Grid container className={style.grid}>
                <Grid item>
                    <GoBackButton />
                </Grid>
            </Grid>    
            <MealsOverview  /> 
            <PrimaryButton text='Spara' color='primary' />
            <FilterRecipes />
            <Grid container className={style.grid}>
                {allRecipes.map((recipe, index) => (
                    <Grid item xs={6} sm={6} md={3} style={{padding: '.5rem'}} key={index}>
                        <MealCard recipe={recipe}/>
                    </Grid>
                ))}
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
