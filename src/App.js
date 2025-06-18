import { BrowserRouter} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
 
  return (

    
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  );
};

export default App;
