import { createContext, useReducer } from "react";
import { cartReducer, cartInitialState, CART_ACTION_TYPES } from "../reducers/cartReducer";


export const CartContext = createContext();

function useCartReducer() {

  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  function addToCart(product) {
    dispatch({
      type: CART_ACTION_TYPES.ADD_TO_CART,
      payload: product
    });
  };

  function discountFromCart(product) {
    dispatch({
      type: CART_ACTION_TYPES.DISCOUNT_FROM_CART,
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

  return { state, addToCart, discountFromCart, removeFromCart, clearCart };
};


export default function CartProvider({ children }) {

  const { state, addToCart, discountFromCart, removeFromCart, clearCart } = useCartReducer();


  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      discountFromCart,
      removeFromCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};