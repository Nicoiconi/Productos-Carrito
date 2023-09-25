export default function CartItem({ addToCart, discountFromCart, product }) {

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
        <button
          onClick={() => discountFromCart(product)}
        >
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