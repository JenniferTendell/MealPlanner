import { Box, makeStyles, Typography } from "@material-ui/core";

export default function RecipeInstructions(props) {
    const style = styles();
    const { instructions } = props.recipe;

    return (
        <Box className={style.root}>
            <Box className={style.titleContainer}>
                <Typography>Gör så här</Typography>
            </Box>
            <Box className={style.instructionsContainer}>
                {instructions.map((instruction, index) => (
                    <Typography className={style.instruction} key={index}>
                        {instruction}
                    </Typography>    
                ))}
            </Box>           
        </Box>
    )
};

const styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;'
    },
    titleContainer: {
        padding: '.8rem 0',
        borderRadius: '.3rem .3rem 0 0',
        backgroundColor: '#FFD586',
        fontSize: '1.5rem'
    },
    instructionsContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: '3.9rem 2rem 1rem',
        textAlign: 'left',
        fontSize: '1.3rem',
    },
    instruction: {
        marginBottom: '1.5rem'
    }

}))
