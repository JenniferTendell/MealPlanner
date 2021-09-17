import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import {theme} from '../theme.js';

import Header from './Header';
import Switch from './Switch';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
