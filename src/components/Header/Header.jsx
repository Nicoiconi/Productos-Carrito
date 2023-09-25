import { CategoryProvider } from "../../context/CategoryContext";
import Filters from "../Filters/Filters";

export default function Header() {


  return (
    <header>

      <h1>React Shop</h1>
      <CategoryProvider>
        <Filters />
      </CategoryProvider>

    </header>
  )
}