import { useContext } from "react";

import { CartContext } from "../context/CartContext";


export function useCart() {
  const cart = useContext(CartContext);

  if (cart === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return cart;
};