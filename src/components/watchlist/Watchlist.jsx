import React, { useState } from "react";
import { useWatchlist } from "./WatchlistContext";
import { FaSearch } from "react-icons/fa";
import Head from "../../pages/Head";
import "../trending/products.css";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Watchlist = () => {
  const { watchlist, dispatch } = useWatchlist();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const removeItemFromWatchlist = (productId) => {
    dispatch({ type: "REMOVE_FROM_WATCHLIST", productId });
  };

  const handleBidNow = (product) => {
    navigate("/user_product", { state: { product } });
    console.log("handleBidNow called with product:", product.name);
  };

  return (
    <>
      <Head />
      <div className="ad-container">
        <h1>My Watchlist</h1>
      </div>
      <div style={{ marginLeft: "10%", marginTop: "20px" }}>
        <div className="search-container">
          <input
            type="text"
            className="search"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="search-icon" />
        </div>
      </div>
      <section className="product__sec">
        <div className="products">
          {loading ? (
            <p>Loading...</p>
          ) : (
            watchlist.length === 0 ? (
              <p>No products</p>
            ) : (
              watchlist.map((product) => (
                <div className="product__card" key={product.id}>
                  <div>
                    <img src={product.image} alt="" className="product__img" />
                  </div>
                  <div className="product__content">
                    <div className="product__title">{product.name}</div>
                  </div>
                  <div className="product__box">
                    <div className="product__price">
                      SP: ${product.starting_price}
                    </div>
                    <FaTrash
                      style={{cursor: "pointer"}}
                      onClick={() => removeItemFromWatchlist(product.id)}
                    />
                    <a
                      className="product__btn"
                      onClick={() => handleBidNow(product)}
                    >
                      Bid Now
                    </a>
                  </div>
                </div>
              ))
            )
          )}
        </div>
      </section>
    </>
  );
};

export default Watchlist;
