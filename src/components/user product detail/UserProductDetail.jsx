import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./userProductStyle.css";
import { useWatchlist } from "../watchlist/WatchlistContext";

const UserProductDetail = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [biddingPrice, setBiddingPrice] = useState(0);
  const [newBiddingPrice, setNewBiddingPrice] = useState(0);
  const [bidderName, setBidderName] = useState("");
  const [bidderNumber, setBidderNumber] = useState("");
  const [bidderEmail, setBidderEmail] = useState("");

  const { watchlist, dispatch } = useWatchlist();

  const location = useLocation();
  const { product } = location.state || {};

  const isItemInWatchlist = watchlist.some((item) => item.id === product.id);

  const currentUserID = localStorage.getItem("user_id");
  const isCurrentUserProductOwner =
    parseInt(product.seller_id) === parseInt(currentUserID);

  const isNotCurrentUserProductOwner =
    parseInt(product.seller_id) !== parseInt(currentUserID);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/categories/" + product.category_id)
      .then((response) => response.json())
      .then((data) => {
        setCategoryData(data["data"].name);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  useEffect(() => {
    if (biddingPrice > product.starting_price) {
      setNewBiddingPrice(biddingPrice);
    }
  }, [biddingPrice, product.starting_price]);

  const handleAddToWatchlist = () => {
    if (isItemInWatchlist) {
      alert("Item is already in the watchlist.");
    } else {
      dispatch({ type: "ADD_TO_WATCHLIST", product });
      alert("Item is Added to Watchlist.");
    }
  };

  const handleBid = () => {
    if (biddingPrice > product.starting_price) {
      const newBidderName = localStorage.getItem("username");
      const newBidderNumber = localStorage.getItem("phone_number");
      const newBidderEmail = localStorage.getItem("email");
      const newBidAmount = biddingPrice;
      setBidderName(newBidderName);
      setBiddingPrice(newBidAmount);

      localStorage.setItem("product_username", newBidderName);
      localStorage.setItem("product_phone_number", newBidderNumber);
      localStorage.setItem("product_email", newBidderEmail);
      localStorage.setItem("bidding_price", newBidAmount);
    } else {
      alert("Your bid must be higher than the starting price.");
    }
  };

  return (
    <>
      <div className="detail__wrapper">
        <div className="left__wrapper">
          <img
            src={product.image}
            alt="Product Image"
            className="product-imgs"
          />
          <a className="watchlist__btn" onClick={handleAddToWatchlist}>
            Add to Watchlist
          </a>
        </div>

        <div className="right__wrapper">
          <h2 className="product-title">{product.name}</h2>

          <p className="starting__price">
            Starting Price: <span>${product.starting_price} (5%)</span>
          </p>

          <div className="product__detail">
            <h2>about this product: </h2>
            <p>
              {product.description} Lorem ipitoieheioho quod consequuntur
              maiores.
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
                  Location: <span>{product.location}</span>
                </li>
                <li>
                  End of Bidding time: <span>{product.bidding_end_time}</span>
                </li>
                {isCurrentUserProductOwner && (
                  <>
                  <h4 style={{marginTop: "20px"}}>Highest Bidder so far:</h4>
                    <li>
                      <ul className="bidder-info">
                        <li>
                          <span>
                            Username: {localStorage.getItem("product_username")}
                          </span>
                        </li>
                        <li>
                          <span>
                            Bid Amount: ${localStorage.getItem("bidding_price")}
                          </span>
                        </li>
                        <li>
                          <span>
                            Email: {localStorage.getItem("product_email")}
                          </span>
                        </li>
                        <li>
                          <span>
                            Phone Number:{" "}
                            {localStorage.getItem("product_phone_number")}
                          </span>
                        </li>
                      </ul>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {isNotCurrentUserProductOwner && (
              <>
                <input
                  type="text"
                  placeholder="Place Your Bidding Price"
                  style={{ paddingLeft: "10px", width: "70%", height: "50px" }}
                  value={biddingPrice}
                  onChange={(e) => setBiddingPrice(e.target.value)}
                />
                <br></br>
                <a className="bid__btn" onClick={handleBid}>
                  Bid
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProductDetail;
