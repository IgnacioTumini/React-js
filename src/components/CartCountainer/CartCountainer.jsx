import { useCartContext } from "../Context/CartContext";

export const CartCountainer = () => {
  const { cartList, vaciarCarrito } = useCartContext();

  return (
    <div className="seccion-1 ">
      {cartList.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt="imagen" className="w-25" />
          Nombre : {product.title} - Cantidad : {product.quantity}
          <button onClick>X</button>
        </li>
      ))}
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
    </div>
  );
};
