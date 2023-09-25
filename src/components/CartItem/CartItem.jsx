import { useCart } from "../../hooks/useCart";


export default function CartItem({ addToCart, product }) {
  // console.log(addToCart, product);

  return (
    <li>

      <div>
        <img
          src={product.thumbnail}
          alt={product.title}
        />
      </div>

      <div>
        <strong>{product.title}</strong> - $ {product.price}
      </div>

      <footer>
        <button>
          -
        </button>
        <small>
          Qty: {product.quantity}
        </small>
        <button
          onClick={() => addToCart(product)}
        >
          +
        </button>
      </footer>
    </li>

  )
}