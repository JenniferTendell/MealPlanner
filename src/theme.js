import { createTheme } from "@material-ui/core";



export const theme = createTheme({
    palette: {
        primary: {
            main: '#F67462'
        },
        secondary:{
            main: '#388055'
        }, 
        info: {
            main: '#FFF'
        },       
    },

    typography: {
        fontFamily: "'Quicksand', sans-serif",
        color: '#112121',
        fontSize: '18',
        
        h1: {
            fontFamily: "'Sansita Swashed', cursive",
            color: '#F67462',
            textShadow: '1px 1px 3px #9C4A3E',
        },
        h2: {
            fontSize: '3rem',
        },
        h3: {
            fontSize: '2rem',
            fontWeight: '400',
            color: '#112121',
        },
        h4: {
            fontSize: '1.5rem',
            color: 'white',
        }
    },

    

    overrides: {
        MuiButton: {
            root: {
                textTransform: 'none',
            }
        },
    }
});