import { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Footer } from "./components/Footer/Footer";
import { CartContextProvider } from "./components/Context/CartContext";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartCountainer } from "./components/CartCountainer/CartCountainer";
import { Inicio } from "./components/Inicio/Inicio";

import {
  BrowserRouter,
  Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <CartContextProvider>
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/category/:cid" element={<ItemListContainer />} />
            <Route path="/Detail/:pid" element={<ItemDetailContainer />} />
            <Route path="/Cart" element={<CartCountainer />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
