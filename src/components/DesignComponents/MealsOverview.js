import { Grid, Box, makeStyles } from '@material-ui/core';
import { useContext } from 'react';
import MealCard from '../DesignComponents/MealCard';
import { RecipesContext } from '../../context/recipesContext';
import MealCardPlaceholder from './MealCardPlaceholder';


export default function MealsOverview() {
    const style = styles();
    const { mealPlanRecipes } = useContext(RecipesContext);

    const mealCardPlaceholder = () => {
        const savedRecipes = mealPlanRecipes.length;

        switch(savedRecipes) {
            case 0: return [...new Array(4)];
            case 1: return [...new Array(3)];
            case 2: return [...new Array(2)];
            case 3: return [...new Array(1)];
            default: return[...new Array(0)];
        };
    };

    return (
        <Box className={style.root}>
            <Grid container>
                {mealPlanRecipes.map((recipe, index) => (
                    <Grid item xs={12} sm={6} md={3} style={{padding: '.5rem'}} key={index}>
                        <MealCard recipe={recipe} />
                    </Grid>
                ))}
                {mealCardPlaceholder().map((index) => (
                    <Grid item xs={12} sm={6} md={3} style={{padding: '.5rem'}} key={index}>
                        <MealCardPlaceholder />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
};

const styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        padding: '2rem 0',  
        width: '100%',
        maxWidth: '80rem',
        margin: 'auto',
    }
}))
