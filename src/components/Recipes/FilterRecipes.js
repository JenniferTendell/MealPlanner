import { Box, FormControl, Grid, makeStyles, MenuItem } from "@material-ui/core";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from "react";
import { recipes } from '../../assets/recipes'
import { Select } from "@mui/material";


export default function FilterRecipes() {
    const style = styles();


    const [category, setCategory] = useState('');
    const [searchValue, setSearchValue] = useState('');
    
    return (
        <Box className={style.root}>
            <Box className={style.colorOverlay}>
                <Grid container justifyContent='center' alignContent='space-around' style={{height: '80%'}}>
                    <Grid item xs={8}>
                        <Autocomplete
                            id="search"
                            freeSolo
                            value={searchValue}
                            onChange={(event, value) => setSearchValue(value)}
                            options={recipes.map((recipe) => recipe.title)}
                            renderInput={(recipe) => (
                                <TextField
                                    variant='filled'
                                    {...recipe}
                                    label="Sök recept"
                                    InputProps={{
                                        ...recipe.InputProps,
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <FormControl fullWidth>
                            <Select
                                id='category-id'
                                value={category}
                                label='Kategori'
                                onChange={(event) => setCategory(event.target.value)}
                            >
                                <MenuItem key={-1} value={'Kategori'}>
                                    Ingen kategori
                                </MenuItem>
                                {recipes.map((recipe) => (
                                    <MenuItem key={recipe.id} value={recipe.category}>
                                        {recipe.category}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                
            </Box>
        </Box>
    )
};

const styles = makeStyles((theme) => ({
    root: {
        height: '15rem',
        margin: '5rem 0 3rem',
        //  backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    colorOverlay: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 213, 134, 0.5)',
        height: '100%',
    },
}))
