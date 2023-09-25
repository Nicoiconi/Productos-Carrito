import { useState, useId } from "react";

import "./Filters.css";

export default function Filters({ setFilters }) {

  const [minPrice, setMinPrice] = useState();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  function handleChangeMinPrice(e) {
    const { value } = e.target;
    setMinPrice(value);
    setFilters(prevState => ({
      ...prevState,
      minPrice: value
    }));
  };

  function handleChangeCategory(e) {
    const {value} = e.target;
    setFilters(prevState => ({
      ...prevState,
      category: value
    }));
  };

  return (
    <section className="filters">

      <div>
        <label htmlFor={minPriceFilterId}>
          Price
        </label>
        <input
          id={minPriceFilterId}
          type="range"
          min="0"
          max="1000"
          onChange={(e) => handleChangeMinPrice(e)}
        />
        <span>$ {minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>
          Category
        </label>
        <select
          name="category"
          id={categoryFilterId}
          onChange={handleChangeCategory}
        >
          <option name="all" value="all" id="">All</option>
          <option name="laptops" value="laptops" id="">Laptops</option>
          <option name="smartphones" value="smartphones" id="">Smart Phones</option>
        </select>
      </div>

    </section>
  )
}