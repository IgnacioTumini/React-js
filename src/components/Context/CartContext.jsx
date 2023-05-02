import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);
// COMPONENTE PARA ENMASCARAR EL CONTEXTO
export const CartContextProvider = ({ children }) => {
  // estados y funciones que estaran en CONTEXTAPP
  const [cartList, setCartList] = useState([]);

  const agregarAlCart = (newProduct) => {
    setCartList([...cartList, newProduct]);
  };

  const vaciarCarrito = () => {
    setCartList([]);
  };

  const precioTotal = () => {
    return cartList.reduce(
      (totalPrice, objProducto) =>
        (totalPrice = totalPrice + objProducto.price * objProducto.quantity),
      0
    );
  };

  return (
    <CartContext.Provider
      value={{ cartList, agregarAlCart, vaciarCarrito, precioTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
