import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <ItemListContainer
        greeting={"Hola, soy Ignacio Tumini, ¡Bienvenido a mi proyecto!"}
      />
    </>
  );
}

export default App;
