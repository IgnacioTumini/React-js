import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Footer } from "./components/Footer/Footer";
import { ItemCount } from "./components/ItemCount/ItemCount";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
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
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/Category/:cid" element={<ItemListContainer />} />
          <Route path="/Detail/:pid" element={<ItemDetailContainer />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
