import { useId } from "react";

import "./Cart.css";

import { CartIcon, ClearCartIcon } from "../Icons/Icons";
import { useCart } from "../../hooks/useCart";
import CartItem from "../CartItem/CartItem";


export default function Cart() {

  const cartCheckBoxId = useId();

  const { cart, addToCart, discountFromCart, clearCart } = useCart();

  return (
    <>
      <label
        htmlFor={cartCheckBoxId}
        className="cart-button"
      >
        <CartIcon />
      </label>
      <input
        id={cartCheckBoxId}
        type="checkbox"
        hidden
      />

      <aside
        className="cart"
      >
        {
          cart?.length > 0
            ? <button
              onClick={clearCart}
            >
              <ClearCartIcon />
            </button>
            : "There are no products"
        }

        <ul>
          {
            cart?.map(item => {
              return (
                <CartItem
                  key={item.id}
                  addToCart={addToCart}
                  discountFromCart={discountFromCart}
                  product={item}
                />
              )
            })
          }

        </ul>
      </aside>
    </>
  );
};