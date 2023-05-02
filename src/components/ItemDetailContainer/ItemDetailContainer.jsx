import React, { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Loading } from "../Loading/Loading";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  const { pid } = useParams();

  //  const getProducts = async () => {
  //   const response = await fetch("https://fakestoreapi.com/products");
  //  const data = response.json();

  //  return data;
  // };

  // useEffect(() => {
  //   getProducts().then((product) => {
  //      if (pid) {
  //       setProduct(product.filter((prod) => prod.id == pid));
  //     }
  //   });
  // }, [pid]);
  //console.log(product);

  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, "productos", pid);

    getDoc(queryDoc);
    //.then (resp => setProduct({id: product.id ...product.data()}))
  }, []);

  return (
    <div className="seccion-1">
      {product.map((prod) => {
        return (
          <ItemDetail
            key={prod.id}
            id={prod.id}
            title={prod.title}
            price={prod.price}
            image={prod.image}
            description={prod.description}
            category={prod.category}
          />
        );
      })}
    </div>
  );
};
