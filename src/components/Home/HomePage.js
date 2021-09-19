import { Grid, makeStyles, Box } from "@material-ui/core";
import ShoppingList from "./ShoppingList";
import PinkButton from "../DesignComponents/PinkButton";
import MealsOverview from "./MealsOverview";
import backgroundImage from '../../assets/salad.jpg';

export default function HomePage() {
    const style = styles();

    return (
        <main className={style.root}>
            <Grid 
                container 
                className={style.shoppingListContainer} 
                spacing={5} 
                justifyContent='center'
            >
                <Grid item xs={12} sm={8} md={6}>
                    <ShoppingList />
                    <PinkButton buttonText='+ Ny vecka'/>
                </Grid>
            </Grid>
            <Box className={style.container}>
                <Box className={style.mealsContainer}>
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
    shoppingListContainer: {        
        textAlign: 'center',
        margin: '-5.5rem auto 0',
        width: '100%',
        maxWidth: '80rem',
    },
    container: {
        marginTop: '5rem',
        width: '100%',
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    mealsContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: '2rem 0',
        backgroundColor: 'rgba(56, 128, 85, 0.5)',
    }
}))
