

import { Box, makeStyles, Typography } from '@material-ui/core'
import headerImage from '../assets/header.jpg'

export default function Header() {
    const style = styles();

    return (
        <Box className={style.root}>
            <img className={style.headerImage} src={headerImage} alt='Food' />
            <Typography variant='h1'>MealPlanner</Typography>
        </Box>
    )
};

const styles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '20rem',
    },
    headerImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    }
}))
