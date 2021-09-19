import { Grid } from '@material-ui/core';
import MealCard from '../DesignComponents/MealCard';


export default function MealsOverview() {

    return (
        <Grid 
            container 
            justifyContent='center'
            alignItems= 'center' 
            spacing={2} 
            wrap
            xs={12} 
            sm={10}
            lg={8}
        >
            {Array.from(Array(4)).map((_, index) => (
                <Grid item xs={6} sm={6} md={3} key={index}>
                    <MealCard />
                </Grid>
            ))}
        </Grid>
    )
};
