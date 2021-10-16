import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import { Restaurant } from "@mui/icons-material";

export default function MealCardPlaceholder() {
  const style = styles();
  return (
    <Box className={style.root}>
      <Box>
        <Restaurant className={style.icon} sx={{ fontSize: 100 }} />
      </Box>
    </Box>
  );
};

const styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '14rem',
        width: '100%',
        borderRadius: '.3rem', 
        backgroundColor: '#E0DFE3',
    },
    infoContainer: {
        display: 'flex',
        alignItems: 'center',
        height: '3rem',
        width: '100%',
        borderRadius: '0 0 .3rem .3rem',
        backgroundColor: 'rgba(17, 33, 33, .8)',
    },
    icon: {
        color: '#C9C9C9',
    },
}))
