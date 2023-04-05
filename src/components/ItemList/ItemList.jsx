import React from "react";
import { Item } from "../Item/Item";

export const ItemList = ({ products }) => {
  return (
    <div>
      {products.length != 0 ? (
        <div className="cards-container">
          {products.map((prod) => (
            <Item
              id={prod.id}
              image={prod.image}
              title={prod.title}
              name={prod.name}
              price={prod.price}
            />
          ))}
        </div>
      ) : (
        <h2>Cargando...</h2>
      )}
    </div>
  );
};
