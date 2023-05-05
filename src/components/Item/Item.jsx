import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ id, image, title, name, price }) => {
  return (
    <div key={id} className="card p-2 w-25 align-items-center ">
      <img src={image} className="card-img-top w-100" alt="Foto del producto" />
      <h5 className="text-center">{title}</h5>
      <div className="card-body p-0">
        <label htmlFor=""> Precio: ${price}</label>
      </div>
      <div className="card-footer p-0 w-100 ">
        <Link to={`/Detail/${id}`}>
          <button className="w-100 button">Detalles</button>
        </Link>
      </div>
    </div>
  );
};
