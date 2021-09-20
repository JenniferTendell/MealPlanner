import { makeStyles, Box, Typography } from "@material-ui/core";
import backgroundImage from '../../assets/salad.jpg';

export default function MealCard(props) {
    const style = styles();
    const { title } = props.recipe;
    
    
    return (
        <Box className={style.root}>
            <Box>
                <Box className={style.gradient}></Box>
                <Box className={style.infoContainer}>
                    <Typography className={style.title} variant='h4'> {title} </Typography>
                </Box>
            </Box>
        </Box>
    )
};

const styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '14rem',
        width: '100%',
        borderRadius: '.3rem',
        backgroundImage: `url(${backgroundImage})`,
    },
    gradient: {
        height: '2.5rem',
        width: '100%',
        backgroundImage: 'linear-gradient(rgba(17, 33, 33, 0), rgba(17, 33, 33, .8))',
    },
    infoContainer: {
        display: 'flex',
        alignItems: 'center',
        height: '3rem',
        width: '100%',
        borderRadius: '0 0 .3rem .3rem',
        backgroundColor: 'rgba(17, 33, 33, .8)',
    },
    title: {
        paddingLeft: '.5rem',
    }

}))
