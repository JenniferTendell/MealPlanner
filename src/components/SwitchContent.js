import { Route, Switch } from "react-router";
import HomePage from "./Home/HomePage";
import RecipesPage from "./Recipes/RecipesPage";
import SpecificRecipePage from "./SpecificRecipe/SpecificRecipePage";

export default function SwitchContent() {
    return (
        <Switch>
            <Route exact path='/'>
                <HomePage />
            </Route>
            <Route path='/recipes'>
                <RecipesPage />
            </Route>
            <Route exact path='/recipe/:id'>
                <SpecificRecipePage />
            </Route>
        </Switch>
    )
}
