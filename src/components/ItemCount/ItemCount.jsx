import React, { useState } from "react";
import { useCount } from "../hooks/useCount";

export const ItemCount = ({ initial = 1, stock = 5, min = 1 }) => {
  const { contador, increment, decrement, reset } = useCount(
    initial,
    stock,
    min
  );

  return (
    <div>
      <h2>Contador : {contador}</h2>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
