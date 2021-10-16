import { Box, makeStyles, Typography } from "@material-ui/core";
import PrimaryButton from "../DesignComponents/PrimaryButton";
import HeartButton from "../DesignComponents/HeartButton";
import { useEffect, useState, useContext } from "react";
import { RecipesContext } from "../../context/recipesContext";

export default function RecipeInfo(props) {
  const style = styles();
  const { title } = props.recipe;
  const { mealPlanRecipes } = useContext(RecipesContext);
  const [addButton, setAddButton] = useState(true);

  useEffect(() => {
    checkIfRecipeExistInMealPlan();
  });

  const checkIfRecipeExistInMealPlan = () => {
    const clickedRecipe = mealPlanRecipes.find(
      (recipe) => recipe.title === title
    );
    const recipeExist = mealPlanRecipes.includes(clickedRecipe);

    if (recipeExist) {
      setAddButton(false);
    } else {
      setAddButton(true);
    }
  };

  const toggleButtonText = () => {
      if (addButton) {     
          return 'Lägg till';
      } else {
          return 'Ta bort';
      }
  };

  const toggleButtonColor = () => {
    if (addButton) {
        return 'secondary';
    } else {
        return 'primary';
    }
  };

  return (
    <Box className={style.root}>
      <Typography variant="h2">{title}</Typography>
      <Box className={style.buttonContainer}>
        <PrimaryButton
          text={toggleButtonText()}
          color={toggleButtonColor()}
          recipeTitle={title}
        ></PrimaryButton>
        <HeartButton></HeartButton>
      </Box>
    </Box>
  );
}

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "10rem",
    marginTop: "4rem",
  },
}));
