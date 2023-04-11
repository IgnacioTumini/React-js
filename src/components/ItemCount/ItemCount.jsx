import React, { useState } from "react";
import { useCount } from "../hooks/useCount";

export const ItemCount = ({ initial = 1, stock = 5, min = 1, onAdd }) => {
  const { contador, increment, decrement, reset } = useCount(
    initial,
    stock,
    min
  );

  function handleOnAdd() {
    onAdd(contador);
  }

  return (
    <div>
      <h2>Cantidad : {contador}</h2>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
      {/*<button onClick={reset}>Reset</button>*/}
      <button onClick={handleOnAdd}>AGREGAR AL CARRITO</button>
    </div>
  );
};
