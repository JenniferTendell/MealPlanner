import { Box, makeStyles, Table, TableBody, TableCell, TableRow, Typography } from "@material-ui/core";

export default function RecipeIngredients(props) {
    const style = styles();
    const { portions, ingredients } = props.recipe;

    return (
        <Box className={style.root}>
            <Box className={style.titleContainer}>
                <Typography>Ingredienser</Typography>
            </Box>
            <Box className={style.portionsContainer}>
                <Typography>{ portions } portioner</Typography>
            </Box>
            <Table>
                <TableBody>
                    {ingredients.map((ingredient, index) => (
                        <TableRow key={index} >
                            <TableCell align='center'>
                                { ingredient[0] + ' ' + ingredient[1] }
                            </TableCell>
                            <TableCell >{ ingredient[2] }</TableCell>
                        </TableRow>
                    ))} 
                </TableBody>          
            </Table>           
        </Box>
    )
};

const styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    titleContainer: {
        padding: '.8rem 0',
        borderRadius: '.3rem .3rem 0 0',
        backgroundColor: '#FFD586',
        fontSize: '1.5rem'
    },
    portionsContainer: {
        padding: '.5rem 0',
        backgroundColor: '#E0DFE3'
    },
    tableRow: {
        paddingLeft: '10rem'
    }

}))
