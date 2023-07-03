import React from "react";
import "./ExploreCard.css";
function ExploreCard({ restaurent }) {
  const name = restaurent.info.name;
  //   const deliverytime = restaurent?.order?.deliveryTime;
  //   // const rating = restaurent?.info?rating?.rating_text;
  //   const approxprice = restaurent?.info?.cfo?.text;
  //   const offers = restaurent?.bulkOffers ?? [];
  //   const cuisine = restaurent?.info?.cuisine
  //   ?.map((item) => item.name)
  //   .slice(0, 3);
  //   const bottomContainers = restaurent?.bottomContainers;
  //   const goldOff = restaurent?.gold?.text;
  //   const proOff = offers.length > 1 ? offers[0].text : null;
  //   const discount =
  //   offers.length > 1
  //   ? offers[1].text
  //   : offers.length === 1
  //   ? offers[0].text
  //   : null;
  const coverimg = restaurent?.info.image?.url;

  return (
    <div className="Exp-Card cursor-point">
      <div className="cover-div">
        <img src={coverimg} alt="" className="exp-img" />
      </div>
    </div>
  );
}

export default ExploreCard;
