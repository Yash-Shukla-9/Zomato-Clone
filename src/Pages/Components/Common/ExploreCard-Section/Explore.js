import React from "react";
import "./Explore.css";
import ExploreCard from "./ExploreCard";
import { Restaurant } from "../../Data/Restaurant";

function Explore({ list, collectionName }) {
  return (
    <div className="explore-div max-width ">
      <div className="ex-title coll-title">{collectionName}</div>

      <div className="grid-exp">
        {list.map((rest) => {
          return <ExploreCard restaurent={Restaurant} />;
        })}
      </div>
    </div>
  );
}

export default Explore;
