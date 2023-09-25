import { useState } from "react";

import Products from "./components/Products/Products";
import Header from "./components/Header/Header";

import { products as inititalProducts } from "./products/products.json";


function App() {

  const [products] = useState(inititalProducts);
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0
  });

  function filterProducts(products) {
    return products.filter(p => {
      return (
        p.price >= filters.minPrice && (
          filters.category === "all" || p.category === filters.category
        )
      )
    });
  };

  const filteredProducts = filterProducts(products);

  return (
    <>

      <Header setFilters={setFilters} />

      <Products products={filteredProducts} />

    </>
  )
}

export default App
