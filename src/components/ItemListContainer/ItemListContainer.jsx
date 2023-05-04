import { useEffect } from "react";
import { useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { Link, useParams } from "react-router-dom";
import { Loading } from "../Loading/Loading";
import {
  collection,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { cid } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryColletion = collection(db, "productos");
    if (cid) {
      const queryFilter = query(queryColletion, where("category", "==", cid));

      getDocs(queryFilter)
        .then((resp) =>
          setProducts(
            resp.docs.map((products) => ({
              id: products.id,
              ...products.data(),
            }))
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    } else {
      getDocs(queryColletion)
        .then((resp) =>
          setProducts(
            resp.docs.map((products) => ({
              id: products.id,
              ...products.data(),
            }))
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  }, [cid]);

  return (
    <div className="seccion-1">
      <div className="d-flex d-row gap-2 w-100 align-items-center justify-content-center p-10">
        <Link to="/category/bordado">
          <button>Libretas Bordadas</button>
        </Link>
        <Link to="/category/tela">
          <button>Libretas de Tela</button>
        </Link>
      </div>

      {isLoading ? <Loading /> : <ItemList products={products} />}
    </div>
  );
};
export default ItemListContainer;
