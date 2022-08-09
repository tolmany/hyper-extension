import { BrowserRouter, MemoryRouter } from "react-router-dom";
import RouterController from "./routes";
import "./App.css";

function App() {
  return (
    <div>
      <MemoryRouter>
        <RouterController />
      </MemoryRouter>
    </div>
  );
}

export default App;
