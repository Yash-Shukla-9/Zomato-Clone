import React from "react";
import "./Header.css";
import location from "../../../images/placeholder.png";
import downArrow from "../../../images/down.png";
import Search from "../../../images/search-interface-symbol.png";
function Header() {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        className="logo"
        alt="Zomato logo"
      />

      <div className="header-right">
        <div className="header-loaction">
          <div className="location-wrap">
            <div className="location-icon center">
              <div className="center">
                <img src={location} alt="location" className="loco-img" />
                <span>Jabalpur</span>
              </div>
              <div className="down-div center">
                <img src={downArrow} className="down-arrow center" alt="" />
              </div>
            </div>
            <div className="location-sep"></div>
            <div className="header-search">
              <img src={Search} className="search-img" alt="" />
              <input
                type="text"
                placeholder="Search For Resturant, cuisine oe a dish"
                className="header-input"
              />
            </div>
          </div>
        </div>

        <div className="profile ab-center">
          <img
            src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            className="Profile-img ab-center "
            alt="Profile"
          />

          <span className="UserName">Yash</span>
          <i class="fa-solid fa-angle-down"></i>
        </div>
      </div>
      {/* 
      <div className="header-right"></div> */}
    </div>
  );
}

export default Header;
