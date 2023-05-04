import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";

export const CartCountainer = () => {
  const { cartList, vaciarCarrito, precioTotal, eliminarProducto } =
    useCartContext();

  return cartList.length == 0 ? (
    <div className="seccion-1">
      <h3>Su carrito esta vacio</h3>
      <Link to="/productos">
        <button>Ver productos</button>
      </Link>
    </div>
  ) : (
    <div className="seccion-1 ">
      {cartList.map((product) => (
        <li className="item-cart" key={product.id}>
          <img src={product.image} alt="imagen" className="w-25" />
          <div className="descripcion-cart">
            <h4>{product.title}</h4>
            <hr></hr>
            <p>Precio: ${product.price}</p>
            <p>Cantidad : {product.quantity}</p>
          </div>

          <button
            className="buttoneliminar"
            onClick={() => eliminarProducto(product.id)}
          >
            X
          </button>
        </li>
      ))}
      <h3>Precio Total: ${precioTotal()}</h3>
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
    </div>
  );
};
