import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import {theme} from '../theme.js';

import Header from './Header';
import SwitchContent from './SwitchContent';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <SwitchContent />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
