import "./Products.css";

import { AddToCartIcon } from "../Icons/Icons";

export default function Products({ products }) {

  return (
    <main className="products">
      <ul>
        {
          products?.slice(0, 10).map(p => {
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
                  <button>
                    <AddToCartIcon />
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