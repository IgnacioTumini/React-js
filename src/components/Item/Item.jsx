import React from "react";

export const Item = ({ id, image, title, name, price }) => {
  return (
    <div key={id} className="card w-25 align-items-center ">
      <img src={image} className="card-img-top w-100" alt="Foto del producto" />
      <h5>{title}</h5>
      <div className="card-body">
        <label htmlFor=""> Precio: {price}</label>
      </div>
      <div className="card-footer p-0 w-100 ">
        <button className="w-100">Detalles</button>
      </div>
    </div>
  );
};
