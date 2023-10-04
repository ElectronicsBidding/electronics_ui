import React from "react";
import "./ads.css";
import { FaSearch } from "react-icons/fa";

const Ads = () => {
  return (
    <>
      <div className="ad-container">
        <h1>Trending Ads</h1>

        <div className="filter-container">
          <div className="search-container">
            <input type="text" className="search" placeholder="Search..." />
            <FaSearch className="search-icon" />
          </div>

          <div className="category-dropdown">
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ads;
