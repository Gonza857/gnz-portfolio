import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./layout/Footer/Footer";
import Navbar from "./layout/Navbar/Navbar";
import Rutas from "./rutas/Rutas";
import UserContext from "./storage/UserContext";

function App() {
  return (
    <UserContext>
      <div className="d-flex flex-wrap" style={{ position: "relative" }}>
        <BrowserRouter>
          <Navbar />
          <Rutas />
          <Footer />
        </BrowserRouter>
      </div>
    </UserContext>
  );
}

export default App;
