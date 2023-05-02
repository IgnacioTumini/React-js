import { useCartContext } from "../Context/CartContext";

export const CartCountainer = () => {
  const { cartList, vaciarCarrito, precioTotal } = useCartContext();

  return (
    <div className="seccion-1 ">
      {cartList.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt="imagen" className="w-25" />
          Nombre : {product.title} - Cantidad : {product.quantity}
          <button onClick>X</button>
        </li>
      ))}
      <h3>Precio Total: ${precioTotal()}</h3>
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
    </div>
  );
};
