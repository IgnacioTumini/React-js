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
      <ItemListContainer />
    </>
  );
}

export default App;
