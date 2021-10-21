import { Box, makeStyles, Typography } from '@material-ui/core'
import { useContext } from 'react';
import headerImage from '../assets/header.jpg'
import { RecipesContext } from '../context/recipesContext';

export default function Header() {
    const style = styles();
    const { activePage } = useContext(RecipesContext);

    const toggleHeaderSize = () => {
        if (activePage === '/') {
            return {height: '25rem'};
        };
        return {height: '5rem'};
    };

    const toggleLogoSize = () => {
        if (activePage === '/'){
            return {fontSize: '6rem'};
        };
        return {fontSize: '3rem'};
    };

    return (
        <Box className={style.root} style={toggleHeaderSize()}>
            <img className={style.headerImage} src={headerImage} alt='Food' />
            <Typography className={style.logo} style={toggleLogoSize()} variant='h1'>
                MealPlanner
            </Typography>
        </Box>
    )
};

const styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        position: 'relative',
        width: '100%',
    },
    headerImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    logo: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',  
        
    },
}));
