import { Grid, Box, makeStyles } from '@material-ui/core';
import { useContext } from 'react';
import MealCard from '../DesignComponents/MealCard';
import { RecipesContext } from '../../context/recipesContext';


export default function MealsOverview() {
    const style = styles();
    const { allRecipes } = useContext(RecipesContext)

    console.log(allRecipes)

    return (
        <Box className={style.root}>
            <Grid container>
                {allRecipes.map((recipe, index) => (
                    <Grid item xs={6} sm={6} md={3} style={{padding: '.5rem'}} key={index}>
                        <MealCard recipe={recipe} />
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
