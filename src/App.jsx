import { useState } from "react";

import Products from "./components/Products/Products";
import Header from "./components/Header/Header";

import { products as inititalProducts } from "./products/products.json";
import { useFilters } from "./hooks/useFilters";
import { Footer } from "./components/Footer/Footer";
import { IS_DEVELOPMENT } from "./config/config";


function App() {

  const [products] = useState(inititalProducts);

  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <>

      <Header />

      <Products products={filteredProducts} />

      {
        IS_DEVELOPMENT && <Footer />
      }

    </>
  )
}

export default App
