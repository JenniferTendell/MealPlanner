import { Grid, makeStyles } from "@material-ui/core";
import MealsOverview from "../DesignComponents/MealsOverview";
import GoBackButton from "../DesignComponents/GoBackButton";
import PinkButton from "../DesignComponents/PinkButton";
import FilterRecipes from "./FilterRecipes";
import MealCard from "../DesignComponents/MealCard";

export default function RecipesPage() {
    const style = styles();
    return (
        <main className={style.root}>  
            <Grid container className={style.grid}>
                <Grid item>
                    <GoBackButton />
                </Grid>
            </Grid>    
            <MealsOverview  /> 
            <PinkButton buttonText='Spara' />
            <FilterRecipes />
            <Grid container className={style.grid}>
                {Array.from(Array(10)).map((_, index) => (
                    <Grid item xs={6} sm={6} md={3} style={{padding: '.5rem'}} key={index}>
                        <MealCard />
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
