import { useId } from "react";

import "./Filters.css";

import { useFilters } from "../../hooks/useFilters";
import { useCategories } from "../../hooks/useCategories";

export default function Filters() {

  const { filters, setFilters } = useFilters();
  const { uniqueCategories } = useCategories();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  function handleChangeMinPrice(e) {
    const { value } = e.target;
    setFilters(prevState => ({
      ...prevState,
      minPrice: value
    }));
  };

  function handleChangeCategory(e) {
    const { value } = e.target;
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
          value={filters?.minPrice}
        />
        <span>$ {filters?.minPrice}</span>
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
          {
            uniqueCategories?.map(c => {
              const categoryIndex = uniqueCategories.indexOf(c);
              return (
                <option
                  key={`${categoryIndex} - ${c}`}
                  value={c}
                >
                  {c}
                </option>
              )
            })
          }
        </select>
      </div>

    </section>
  )
}