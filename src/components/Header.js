import { Box, makeStyles, Typography } from '@material-ui/core'
import headerImage from '../assets/header.jpg'

export default function Header() {
    const style = styles();

    return (
        <Box className={style.root}>
            <img className={style.headerImage} src={headerImage} alt='Food' />
            <Typography className={style.logo} variant='h1'>
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
        height: '25rem',
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
    }
    

}))
