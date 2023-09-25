import { useState } from "react";

export function useFilters() {

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

  return { filterProducts, setFilters }
};