import React from "react";
import "./FilterItem.css";
function FilterItem({ filter }) {
  return (
    <div className="filteritem">
      {filter.icon && filter.icon}

      <div className="filter-tilte">{filter.title}</div>
    </div>
  );
}

export default FilterItem;
