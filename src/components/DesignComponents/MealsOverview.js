import { Grid, Box, makeStyles } from '@material-ui/core';
import MealCard from '../DesignComponents/MealCard';


export default function MealsOverview() {
    const style = styles();
    return (
        <Box className={style.root}>
            <Grid container>
                {Array.from(Array(4)).map((_, index) => (
                    <Grid item xs={6} sm={6} md={3} style={{padding: '.5rem'}} key={index}>
                        <MealCard />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
};

const styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        padding: '3rem 0 5rem',
        width: '100%',
        maxWidth: '80rem',
        margin: '0 auto',
    }
}))
