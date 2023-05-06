import React from "react";

import { ItemCount } from "../ItemCount/ItemCount";
import { useCartContext } from "../Context/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ItemDetail = ({ product }) => {
  const { agregarAlCart, cartList } = useCartContext();
  const [tieneCantidad, ActualizarCantidad] = useState(false);

  const onAdd = (cantidad) => {
    console.log(cantidad);
    agregarAlCart({ ...product, quantity: cantidad });
    ActualizarCantidad(true);
  };

  console.log(cartList);
  return (
    <div className="row w-100 justify-content-center margin-auto">
      <div className="col-6 d-flex  div-image ">
        <img
          src={product.image}
          alt="foto del producto"
          className="Image-item"
        />
      </div>
      <div className="col-6 w-40 div-item-description ">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>Precio: ${product.price}</h3>
        {tieneCantidad ? (
          <>
            <Link to="/cart">
              <button className="button">Terminar compra</button>
            </Link>
            <Link to="/productos">
              <button className="button">Seguir comprando</button>
            </Link>
          </>
        ) : (
          <ItemCount initial={1} stock={20} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};
