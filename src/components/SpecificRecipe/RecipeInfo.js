import { Box, makeStyles, Typography } from "@material-ui/core";
import PrimaryButton from '../DesignComponents/PrimaryButton';
import HeartButton from "../DesignComponents/HeartButton";

export default function RecipeInfo(props) {
    const style = styles();
    const { title } = props.recipe;
    
    return (
        <Box className={style.root}> 
            <Typography variant='h2'>{ title }</Typography>
            <Box className={style.buttonContainer}>
                <PrimaryButton text='Lägg till' color='secondary'></PrimaryButton>
                <HeartButton></HeartButton>
            </Box>
        </Box>
    )
};

const styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '10rem',
        marginTop: '4rem'
    }
}))
