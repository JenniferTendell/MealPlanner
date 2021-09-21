import { Grid, makeStyles, Box } from "@material-ui/core";
import { Link } from 'react-router-dom';
import ShoppingList from "./ShoppingList";
import PrimaryButton from "../DesignComponents/PrimaryButton";
import MealsOverview from "../DesignComponents/MealsOverview";
import backgroundImage from '../../assets/salad.jpg';

export default function HomePage() {
    const style = styles();

    return (
        <main className={style.root}>
            <Grid 
                container 
                className={style.grid} 
                spacing={5} 
                justifyContent='center'
            >
                <Grid item xs={12} sm={8} md={6}>
                    <ShoppingList />
                    <Link to='recipes' style={{textDecoration: 'none'}}>
                        <PrimaryButton text='+ Ny vecka' color='primary'/>
                    </Link>
                </Grid>
            </Grid>
            <Box className={style.mealsContainer}>
                <Box className={style.colorOverlay}>
                    <MealsOverview  />
                </Box>
            </Box>
        </main>
    )
};

const styles = makeStyles((theme) => ({
    root: {
        position: 'relative'
    },
    grid: {        
        textAlign: 'center',
        margin: '-5.5rem auto 0',
        width: '100%',
        maxWidth: '80rem',
    },
    mealsContainer: {
        marginTop: '5rem',
        width: '100%',
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    colorOverlay: {
        backgroundColor: 'rgba(56, 128, 85, 0.5)',
    }
}))
