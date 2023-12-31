import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Title from "./components/Title/Title";
import Categorias from "./Pages/Categorias/Categorias";
import Ropa from "./Pages/Ropa/Ropa";
import Tazas from "./Pages/Tazas/Tazas";
import Varios from "./Pages/Varios/Varios";
import Cart from "./Pages/Cart/Cart";
import Item from "./components/Item/Item";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Title />
      <Routes>
        <Route path="/" element={<Categorias />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Ropa" element={<Ropa />} />
        <Route path="/Tazas" element={<Tazas />} />
        <Route path="/Varios" element={<Varios />} />
        <Route path="/Categorias/:itemId" element={<Item />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
