import { createContext } from "react";
import {products} from "../products/products.json";

export const CategoryContext = createContext();

export function CategoryProvider({ children }) {

  const categories = products?.map(p => p.category);

  const uniqueCategories = [...new Set(categories)];

  return(
    <CategoryContext.Provider value={
      {
        uniqueCategories
      }
    }>
      {children}
    </CategoryContext.Provider>
  )
}