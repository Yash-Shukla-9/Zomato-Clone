import React from "react";
import "./Delivery.css";
import Filter from "./FilterBtns/Filter";
import DeliveryColl from "./DeliveryCollections/Index";
import TopBrands from "./TopBrands-div/TopBrands";
import Explore from "../ExploreCard-Section/Explore";
import { Restaurant } from "../../Data/Restaurant";

const DeliveryFilter = [
  {
    id: 1,
    icon: <ion-icon name="filter"></ion-icon>,
    title: "Filters",
  },

  {
    id: 2,
    title: "Rating: 4.0+ ",
  },

  {
    id: 3,
    title: "Safe and Hygienice ",
  },

  {
    id: 4,
    title: "Pure Veg ",
  },

  {
    id: 5,
    icon: <ion-icon name="chevron-collapse-outline"></ion-icon>,
    title: "Delivery Time ",
  },

  {
    id: 6,
    title: "Good Offers ",
  },
];

const restaurantList = Restaurant;

function Delivery() {
  return (
    <div className="Main-delivery">
      <div className="max-width">
        <Filter filterList={DeliveryFilter} />
      </div>
      <DeliveryColl />
      <TopBrands />

      <Explore
        list={restaurantList}
        collectionName="Delivery Restaurants in Jabalpur"
      />
    </div>
  );
}

export default Delivery;
