import { createContext, useReducer, useState } from "react";
import { cartReducer, cartInitialState, CART_ACTION_TYPES } from "../reducers/cartReducer";


export const CartContext = createContext();

function useCartReducer() {

  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  console.log(state);

  function addToCart(product) {
    console.log(product)
    dispatch({
      type: CART_ACTION_TYPES.ADD_TO_CART,
      payload: product
    });
  };

  function removeFromCart(product) {
    dispatch({
      type: CART_ACTION_TYPES.REMOVE_FROM_CART,
      payload: product
    });
  };

  function clearCart() {
    dispatch({
      type: CART_ACTION_TYPES.CLEAR_CART
    });
  };

  return { state, addToCart, removeFromCart, clearCart };
}


export default function CartProvider({ children }) {

const { state, addToCart, removeFromCart, clearCart } = useCartReducer();



  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      // discountFromCart,
      removeFromCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}