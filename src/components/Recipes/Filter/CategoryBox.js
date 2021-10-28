import { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { RecipesContext } from "../../../context/recipesContext";


export default function CategoryBox() {
  const { allRecipes } = useContext(RecipesContext);
  const [value, setValue] = useState("");
  const [searchInputValue, setSearchInputValue] = useState("");

  const getCategoryOptions = () => {
    const categories = [];
    allRecipes.map((recipe) => categories.push(recipe.category));

    return categories;
  };
  
  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      inputValue={searchInputValue}
      onInputChange={(event, newSearchValue) => {
        setSearchInputValue(newSearchValue);
      }}
      options={getCategoryOptions()}
      renderInput={(params) => <TextField {...params} label="Välj kategori" />}
    />
  );
}
