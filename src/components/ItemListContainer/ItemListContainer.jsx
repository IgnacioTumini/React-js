import { useEffect } from "react";
import { useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { cid } = useParams();

  const getProduct = async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=9");
    const data = response.json();

    return data;
  };

  useEffect(() => {
    if (cid) {
      getProduct().then((products) => {
        setProducts(products.filter((prod) => prod.category === cid));
        console.log(setProducts);
      });
    } else {
      getProduct().then((products) => {
        setProducts(products);
        console.log(setProducts);
      });
    }
  }, [cid]);

  return (
    <div className="seccion-1">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
