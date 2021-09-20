import { Grid, makeStyles, Paper, Typography, Box } from "@material-ui/core";
import CheckBoxItem from "./CheckBoxItem";

export default function ShoppingList() {
  const style = styles();

  return (
    <Paper className={style.paper} elevation={3}>
        <Grid container justifyContent="center">
            <Grid item xs={12}>
            <Typography variant="h3">Inköpslista</Typography>
            <Box className={style.devider}></Box>
            </Grid>
        </Grid>
        <Grid container justifyContent='space-between'>
            {Array.from(Array(6)).map((_, index) => (
                <Grid item xs={12} sm={6} key={index}>
                    <CheckBoxItem />
                </Grid>
            ))}
        </Grid>
    </Paper>
  );
}

const styles = makeStyles((theme) => ({
  paper: {
    width: "100%",
    padding: "1.5rem 1rem 2.5rem",
    marginBottom: '2rem',
    textAlign: "center",
  },
  devider: {
    width: "60%",
    minWidth: "12rem",
    height: ".2rem",
    margin: ".5rem auto 2rem",
    backgroundColor: "#FFD586",
  },
}));
