import { useId } from "react";

import "./Cart.css";

import { CartIcon, ClearCartIcon } from "../Icons/Icons";


export default function Cart() {

  const cartCheckBoxId = useId();

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
        <ul>
          <li>

            <img
              src=""
              alt=""
            />

            <div>
              <strong>name</strong> - $ price
            </div>
          </li>

          <footer>
            <small>
              Qty: 1
            </small>
            <button>
              +
            </button>
          </footer>

        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};