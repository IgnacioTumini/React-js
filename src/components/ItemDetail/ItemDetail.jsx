//import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";

const onAdd = (cantidad) => {
  console.log(cantidad);
};

export const ItemDetail = (props) => {
  console.log(props.id);
  return (
    <div className="row ">
      <div className="col-6 d-flex  div-image">
        <img src={props.image} alt="foto del producto" className="Image-item" />
      </div>
      <div className="col-6 w-40 div-item-description">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <h3>Precio: ${props.price}</h3>
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
      </div>
    </div>
  );
};
