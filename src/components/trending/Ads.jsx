import React, {useEffect, useState } from 'react';
import "./ads.css";
import { FaSearch } from "react-icons/fa";

const Ads = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:3000/categories')
      .then((response) => response.json())
      .then((data) => {
        setCategoryData(data["data"]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching category data:', error);
      })
  });

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
              {categoryData.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ads;
