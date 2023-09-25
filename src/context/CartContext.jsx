import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const productInCartIndex = cart.findIndex(item => item.product.id === product.id);

    if (productInCartIndex >= 0) {

      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;

      return setCart(newCart);

    } else {
      setCart(prevState => ([
        ...prevState,
        {
          product,
          quantity: 1
        }
      ]));
    }

  };

  function removeFromCart(product) {
    setCart(prevState => prevState.filter(item => item.product.id !== product.id))
  };

  function clearCart() {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}