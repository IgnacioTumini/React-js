import { useEffect } from "react";
import { useState } from "react";
import { ItemList } from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=9");
    const data = response.json();

    return data;
  };

  useEffect(() => {
    getProduct().then((products) => {
      setProducts(products);
      console.log(setProducts);
    });
  }, []);

  return (
    <div className="seccion-1">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
