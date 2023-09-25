import "./Products.css";

import { AddToCartIcon, RemoveFromCartIcon } from "../Icons/Icons";
import { useCart } from "../../hooks/useCart";


export default function Products({ products }) {
  // console.log(products);

  const { addToCart, cart, removeFromCart } = useCart();
  // console.log(cart);

  function checkProductInCart(product) {
    // console.log(product);
    return cart.some(item => item.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {
          products?.slice(0, 10).map(p => {
            const isProductInCart = checkProductInCart(p)
            return (
              <li key={p.id}>
                <img
                  src={p.thumbnail}
                  alt={p.title}
                />
                <div>
                  <strong>
                    {p.title} - $ {p.price}
                  </strong>
                </div>
                <div>
                  <button
                    onClick={() => {
                      isProductInCart
                        ? removeFromCart(p)
                        : addToCart(p)
                    }}
                  >
                    {
                      isProductInCart
                        ? <RemoveFromCartIcon />
                        : <AddToCartIcon />
                    }
                  </button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}