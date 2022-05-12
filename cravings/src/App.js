import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </div>
    
    
  );
}

export default App;
