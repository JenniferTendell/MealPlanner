import { useContext, useState  } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { RecipesContext } from "../../../context/recipesContext";


export default function SearchBox() {
  const { allRecipes, filterRecipes } = useContext(RecipesContext);
  const [value, setValue] = useState("");
  const [searchInputValue, setSearchInputValue] = useState("");
  
  const getRecipeOptions = () => {
    const recipes = [];
    allRecipes.map((recipe) => recipes.push(recipe.title));

    return recipes;
  };

  const updateSearchValue = (newSearchValue) => {
    setSearchInputValue(newSearchValue);
    filterRecipes(newSearchValue.toLowerCase());
  };
  
  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      inputValue={searchInputValue}
      onInputChange={(event, newSearchValue) => updateSearchValue(newSearchValue)}
      options={getRecipeOptions()}
      renderInput={(params) => <TextField {...params} label="Sök recept" />}
    />
  );
}
