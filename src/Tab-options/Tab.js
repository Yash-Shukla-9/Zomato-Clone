import React from "react";
import "./Tab.css";
const tabs = [
  {
    id: 1,
    name: "Delivery",
    activeimg:
      "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
    bgColor: "#FCEEC0",
    inActiveImg:
      "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
  },

  {
    id: 2,
    name: "Dining Out",
    activeimg:
      "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
    bgColor: "#E5F3F3",
    inActiveImg:
      "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp",
  },

  {
    id: 3,
    name: "Nightlife",
    activeimg:
      "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
    bgColor: "#EDf4FF",
    inActiveImg:
      "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
  },
];

function Tab({ activeTab, SetActiveTab }) {
  return (
    <div className="TabOption">
      <div className="max-width OptionWrap cursor-point ">
        {tabs.map((item) => {
          return <div className="OptionName">{item.name}</div>;
        })}
      </div>
    </div>
  );
}

export default Tab;
