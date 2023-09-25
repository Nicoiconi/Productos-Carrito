import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";


export function useFilters() {

  const { filters, setFilters } = useContext(FilterContext);

  function filterProducts(products) {
    return products.filter(p => {
      return (
        p.price >= filters?.minPrice && (
          filters?.category === "all" || p.category === filters?.category
        )
      )
    });
  };

  return { filters, filterProducts, setFilters };
};