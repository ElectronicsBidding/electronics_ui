import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./products.css";
import { FaSearch } from "react-icons/fa";

import Lottie from "lottie-react";
import bat from "../../assets/images/bat.json";

const Products = () => {
  const navigate = useNavigate();

  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const phoneRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 20000);
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/products")
      .then((response) => response.json())
      .then((data) => {
        setProductData(data["data"]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  const handleBidNow = (product) => {
    navigate("/user_product", { state: { product } });
  };

  return (
    <>
      <div className="ad-container">
        <h1>Trending Ads</h1>
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
          {productData.length > 0 ? (
            productData
              .filter((product) => {
                return search.toLowerCase() === ""
                  ? product
                  : product.name
                      .toLowerCase()
                      .includes(search.toLowerCase(search));
              })
              .map((product, index) => (
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
                    <a
                      className="product__btn"
                      onClick={() => handleBidNow(product)}
                    >
                      Bid Now
                    </a>
                  </div>
                </div>
              ))
          ) : (
            <div>
              <Lottie
                loop={true}
                lottieRef={phoneRef}
                animationData={bat}
                style={{
                  width: "30%",
                  marginLeft: "30%",
                  marginTop: "5%",
                }}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Products;
