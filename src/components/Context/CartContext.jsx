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

  return (
    <CartContext.Provider value={{ cartList, agregarAlCart, vaciarCarrito }}>
      {children}
    </CartContext.Provider>
  );
};
