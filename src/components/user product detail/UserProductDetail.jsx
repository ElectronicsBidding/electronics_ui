import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./userProductStyle.css";

const UserProductDetail = () => {
  const [categoryData, setCategoryData] = useState([]);

  const location = useLocation();
  const {product} = location.state || {};

  useEffect(() => {
    fetch('http://127.0.0.1:3000/categories/'+product.category_id)
      .then((response) => response.json())
      .then((data) => {
        setCategoryData(data["data"].name);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  return (
    <>
      <div class="detail__wrapper">
        <div class="left__wrapper">
          <img src={product.image} alt="Product Image" class="product-imgs" />
          <a className="watchlist__btn" href="#">
            Cart
          </a>
        </div>

        <div class="right__wrapper">
          <h2 class="product-title">{product.name}</h2>

          <p class="starting__price">
            Starting Price: <span>${product.starting_price} (5%)</span>
          </p>

          <div class="product__detail">
            <h2>about this product: </h2>
            <p>
              {product.description}  Lorem ipitoieheioho quod consequuntur maiores.
            </p>

            <div>
              <ul>
                <li>
                  Available: <span>{product.status}</span>
                </li>
                <li>
                  Category: <span>{categoryData}</span>
                </li>
                <li>
                  Shipping Area: <span>All over the world</span>
                </li>
                <li>
                  Shipping Fee: <span>Free</span>
                </li>
              </ul>
            </div>

            <input
              type="text"
              placeholder="Place Your Bidding Price"
              style={{ paddingLeft: "10px", width: "70%", height: "50px" }}
            />
            <br></br>
            <a className="bid__btn" href="#">
              Bid
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProductDetail;
