import { useState } from "react";

import "./Filters.css";

export default function Filters({ setFilters }) {

  const [minPrice, setMinPrice] = useState();

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
        <label htmlFor="price">
          Price
        </label>
        <input
          id="price"
          type="range"
          min="0"
          max="1000"
          onChange={(e) => handleChangeMinPrice(e)}
        />
        <span>$ {minPrice}</span>
      </div>

      <div>
        <label htmlFor="category">
          Category
        </label>
        <select
          name="category"
          id="category"
          onChange={handleChangeCategory}
        >
          <option name="" id="">All</option>
          <option name="laptops" value="laptops" id="">Laptops</option>
          <option name="smartphones" value="smartphones" id="">Smart Phones</option>
        </select>
      </div>

    </section>
  )
}