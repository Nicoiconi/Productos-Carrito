import { useState } from "react";

import Products from "./components/Products/Products";
import Header from "./components/Header/Header";

import { products as inititalProducts } from "./products/products.json";
import { useFilters } from "./hooks/useFilters";


function App() {

  const [products] = useState(inititalProducts);

  const { filterProducts, setFilters } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <>

      <Header setFilters={setFilters} />

      <Products products={filteredProducts} />

    </>
  )
}

export default App
