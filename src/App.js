import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/Navbar/Navbar";
import Rutas from "./rutas/Rutas";
import UserContext from "./storage/UserContext";

function App() {
  return (
    <UserContext>
      <div className="d-flex" style={{ position: "relative" }}>
        <BrowserRouter>
          <Navbar />
          <Rutas />
        </BrowserRouter>
      </div>
    </UserContext>
  );
}

export default App;
