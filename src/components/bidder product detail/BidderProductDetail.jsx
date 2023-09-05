import React from "react";
import logo from "../../assets/images/logo.png";
import "./bidderProductStyle.css";

const BidderProductDetail = () => {
  return (
    <>
      <div class="detail__wrapper">
        <div class="left__wrapper">
          <img src={logo} alt="Product Image" class="product-imgs" />
          <div className="leaderboard">
            <h1>Leading Bidder</h1>
            <hr />
            <h2>1: Abebe Bikila</h2>
            <hr />
          </div>
        </div>

        <div class="right__wrapper">
          <h2 class="product-title">Tech On</h2>

          <p class="starting__price">
            Starting Price: <span>$249.00 (5%)</span>
          </p>

          <div class="product__detail">
            <h2>about this item: </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              eveniet veniam tempora fuga tenetur placeat sapiente architecto
              illum soluta consequuntur, aspernatur quidem at sequi ipsa!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.
            </p>

            <div style={{ display: "flex", justifyContent: "space-around", marginRight: "30%" }}>
              <ul>
                <li>
                  Color: <span>Black</span>
                </li>
                <li>
                  Available: <span>in stock</span>
                </li>
                <li>
                  Category: <span>Electronics</span>
                </li>
                <li>
                  Shipping Area: <span>All over the world</span>
                </li>
                <li>
                  Shipping Fee: <span>Free</span>
                </li>
              </ul>

              <ul>
                <li>
                  Color: <span>Black</span>
                </li>
                <li>
                  Available: <span>in stock</span>
                </li>
                <li>
                  Category: <span>Electronics</span>
                </li>
                <li>
                  Shipping Area: <span>Addis Ababa</span>
                </li>
                <li>
                  Shipping Fee: <span>Free</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default BidderProductDetail;
