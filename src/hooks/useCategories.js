import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";


export function useCategories() {

  const { uniqueCategories } = useContext(CategoryContext);

  return { uniqueCategories };
}