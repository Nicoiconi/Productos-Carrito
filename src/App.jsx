import { useState } from "react";
import Products from "./components/Products/Products";
import { products as inititalProducts } from "./products/products.json";

function App() {

  const [products] = useState(inititalProducts);
  

  return (
    <>
      <h1>Productos y Carrito</h1>

      <Products products={products} />
    </>
  )
}

export default App
