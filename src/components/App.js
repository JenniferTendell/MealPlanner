import { BrowserRouter } from "react-router-dom";
import Header from './Header';
import Switch from './Switch';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch />
    </BrowserRouter>
  );
}

export default App;
