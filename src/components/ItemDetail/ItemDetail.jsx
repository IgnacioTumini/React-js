//import React from "react";

import { ItemCount } from "../ItemCount/ItemCount";
import { useCartContext } from "../Context/CartContext";

export const ItemDetail = (product) => {
  const { agregarAlCart, cartList } = useCartContext();

  const onAdd = (cantidad) => {
    console.log(cantidad);
    agregarAlCart({ ...product, quantity: cantidad });
  };

  console.log(cartList);
  return (
    <div className="row w-100">
      <div className="col-6 d-flex  div-image ">
        <img
          src={product.image}
          alt="foto del producto"
          className="Image-item"
        />
      </div>
      <div className="col-6 w-40 div-item-description">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>Precio: ${product.price}</h3>
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
      </div>
    </div>
  );
};
