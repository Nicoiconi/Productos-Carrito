import Filters from "../Filters/Filters";

export default function Header({ setFilters }) {

  return (
    <header>
      <h1>React Shop</h1>

      <Filters setFilters={setFilters} />
  
    </header>
  )
}