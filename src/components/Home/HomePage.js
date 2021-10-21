import { makeStyles, Box, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
import ShoppingList from "./ShoppingList";
import PrimaryButton from "../DesignComponents/PrimaryButton";
import MealsOverview from "../DesignComponents/MealsOverview";
import { useContext, useEffect } from "react";
import { RecipesContext } from "../../context/recipesContext";
import backgroundImage from "../../assets/BgShoppingList.jpg";

export default function HomePage() {
    const style = styles();
    const { setActivePage } = useContext(RecipesContext);

    useEffect(() => {
        setActivePage(window.location.pathname);
    });

    return (
        <main>
            <Box className={style.mealsContainer}>
                <Typography variant='h4'>Maträtter denna veckan</Typography>
                <MealsOverview  />  
                <Link to='recipes' style={{textDecoration: 'none'}}>
                    <PrimaryButton text='+ Ny vecka' color='primary'/>
                </Link>
            </Box>
            <Box className={style.shoppingListContainer}>
                <ShoppingList />
            </Box>
        </main>
    )
};

const styles = makeStyles((theme) => ({
    mealsContainer: {
        marginTop: '2rem',
        width: '100%',
        textAlign: 'center',
    },
    shoppingListContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        marginTop: '5rem',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
}))
