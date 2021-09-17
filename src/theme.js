import { createTheme } from "@material-ui/core";


export const theme = createTheme({
    palette: {
        primary: {
            main: '#F67462'
        },
        secondary:{
            main: '#388055'
        },        
    },

    typography: {
        fontFamily: "'Quicksand', sans-serif",
        color: '#112121',
        fontSize: '1.5rem',
        
        h1: {
            fontFamily: "'Sansita Swashed', cursive",
            color: '#F67462',

        },
        h4: {
            fontWeight: '400',
            color: '#423C46',
            marginBottom: '.5rem',
            fontSize: '2.5rem',
            '@media (max-width: 600px)': {
                fontSize: '2rem',
                marginBottom: '1rem',
            },
        },
    },
});