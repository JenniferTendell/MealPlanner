import { Grid, makeStyles, Paper, Typography, Box } from "@material-ui/core";
import { useContext } from "react";
import { RecipesContext } from "../../context/recipesContext";
import CheckBoxItem from "./CheckBoxItem";

export default function ShoppingList() {
  const style = styles();
  const { shoppingList } = useContext(RecipesContext);

  return (
    <Paper className={style.paper} elevation={3}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3">Inköpslista</Typography>
          <Box className={style.devider}></Box>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between">
        {shoppingList.map((shoppingItem, index) => (
          <Grid item xs={12} sm={6} key={index} className={style.shoppingListGrid}>
            <CheckBoxItem shoppingItem={shoppingItem} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

const styles = makeStyles((theme) => ({
  paper: {
    width: "60rem",
    padding: "1rem 2.5rem 2rem",
    margin: "4rem 1rem",
    textAlign: "center",
  },
  devider: {
    width: "100%",
    height: ".1rem",
    margin: ".5rem 0 2rem",
    backgroundColor: "#C9C9C9",
  },
  shoppingListGrid: {
    textAlign: "left",
    paddingLeft: "1rem",
  },
}));
