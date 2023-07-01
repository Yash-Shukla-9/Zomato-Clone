import React, { useState } from "react";
import Header from "./Components/Common/Header";
import Tab from "../Tab-options/Tab";
import Footer from "./Components/Common/Footer";
import Delivery from "./Components/Common/Delivery/Delivery";
import DiningOut from "./Components/Dinning-Out/DiningOut";
import Night from "./Components/Night-Life/Night";
function Home() {
  const [activeTab, SetActiveTab] = useState("Delivery");

  return (
    <>
      <Header />
      <Tab activeTab={activeTab} SetActiveTab={SetActiveTab} />

      {getCorrectScreen(activeTab)}

      <Footer />
    </>
  );
}

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;

    case "Dining Out":
      return <DiningOut />;

    case "NightLife":
      return <Night />;
    default:
      return <Delivery />;
  }
};

export default Home;
