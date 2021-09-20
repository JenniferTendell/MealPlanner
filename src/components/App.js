import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import {theme} from '../theme.js';

import Header from './Header';
import SwitchContent from './SwitchContent';
import RecipesProvider from "../context/recipesContext.js";

function App() {
  return (
    <BrowserRouter>
      <RecipesProvider>
        <ThemeProvider theme={theme}>
          <Header />
          <SwitchContent />
        </ThemeProvider>
      </RecipesProvider>
    </BrowserRouter>
  );
}

export default App;
