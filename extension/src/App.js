import { MemoryRouter } from "react-router-dom";
import Header from "./Common/Header";
import RouterController from "./routes";
import "./App.css";

function App() {
  return (
    <div className="w-[768px] h-[540px]">
      <MemoryRouter>
        <Header />
        <RouterController />
      </MemoryRouter>
    </div>
  );
}

export default App;
