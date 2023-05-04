import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);
// COMPONENTE PARA ENMASCARAR EL CONTEXTO
export const CartContextProvider = ({ children }) => {
  // estados y funciones que estaran en CONTEXTAPP
  const [cartList, setCartList] = useState([]);

  const agregarAlCart = (newProduct) => {
    const indexProduct = cartList.findIndex(
      (product) => product.id === newProduct
    );

    if (indexProduct === -1) {
      setCartList([...cartList, newProduct]);
    } else {
      cartList[indexProduct].quantity += newProduct.quantity;
      setCartList([...cartList]);
    }
  };

  const cantidadTotal = () =>
    cartList.reduce(
      (cantidadTotal, objProducto) => (cantidadTotal += objProducto.quantity),
      0
    );

  const eliminarProducto = (pid) => {
    setCartList(cartList.filter((product) => product.id != pid));
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
      value={{
        cartList,
        agregarAlCart,
        vaciarCarrito,
        precioTotal,
        cantidadTotal,
        eliminarProducto,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
