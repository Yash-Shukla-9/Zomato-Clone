import React from "react";

import "./DeliveryDivbox.css";
function DeliverDivbox({ item }) {
  return (
    <div className="DivBox-img max-width">
      <div className="delivery-imgCover">
        <img src={item.coverImg} className="Div-img-cover" alt={item.title} />
      </div>

      <div className="img-title">{item.title}</div>
    </div>
  );
}

export default DeliverDivbox;
