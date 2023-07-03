import React from "react";
import "./Filter.css";
import FilterItem from "./Filter-Item/FilterItem";

function Filter({ filterList }) {
  return (
    <div className="filters-div">
      {filterList &&
        filterList.map((filter) => {
          return (
            <div>
              <FilterItem filter={filter} key={filter.id} />
            </div>
          );
        })}
    </div>
  );
}
export default Filter;
