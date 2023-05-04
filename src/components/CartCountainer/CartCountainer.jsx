import { useCartContext } from "../Context/CartContext";

export const CartCountainer = () => {
  const { cartList, vaciarCarrito, precioTotal } = useCartContext();

  return (
    <div className="seccion-1 ">
      {cartList.map((product) => (
        <li className="item-cart" key={product.id}>
          <img src={product.image} alt="imagen" className="w-25" />
          <div className="descripcion-cart">
            <h4>{product.title}</h4>
            <hr></hr>
            <p>Cantidad : {product.quantity}</p>
          </div>

          <button className="buttoneliminar" onClick>
            X
          </button>
        </li>
      ))}
      <h3>Precio Total: ${precioTotal()}</h3>
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
    </div>
  );
};
