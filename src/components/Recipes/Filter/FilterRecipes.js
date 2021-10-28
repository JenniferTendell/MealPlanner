import { Box, Grid, makeStyles } from "@material-ui/core";
import backgroundImage from "../../../assets/generalBg.jpg";
import CategoryBox from "./CategoryBox";
import SearchBox from "./SearchBox";

export default function FilterRecipes() {
  const style = styles();

  return (
    <Box className={style.root}>
      <Grid
        container
        justifyContent="center"
        alignContent="space-around"
        style={{ height: "80%" }}
      >
        <Grid item xs={7}>
          <SearchBox />
        </Grid>
        <Grid item xs={6}>
          <CategoryBox />
        </Grid>
      </Grid>
    </Box>
  );
}

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    height: "15rem",
    margin: "5rem 0 3rem",
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));
