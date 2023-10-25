import React, { useState, useEffect } from "react";
import "./bidderProduct.css";
import { FaTrash } from "react-icons/fa";
import { LuClipboardEdit } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const BidderProduct = () => {
  const navigate = useNavigate();

  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:3000/products/filter/" + localStorage.getItem("user_id"))
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

  const handleEditClick = () => {
    navigate("/edit_post");
  };

  const handleDeleteClick = (productId) => {
    fetch("http://127.0.0.1:3000/products/" + productId, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 200) {
          setProductData((prevProducts) =>
            prevProducts.filter((product) => product.id !== productId)
          );
        } else {
          console.error("Error deleting product");
        }
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  return (
    <>
      <div style={{ marginLeft: "10%", marginTop: "20px" }}>
        <div className="search-container">
          <input
            type="text"
            className="search"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <section className="bidder__product__sec">
        <div className="bidder__products">
          {productData.length > 0 ? (
            productData.filter((product) => {
              return search.toLowerCase() === ""
                ? product
                : product.name
                    .toLowerCase()
                    .includes(search.toLowerCase(search))
            }).map((product, index) => (
            <div className="bidder__product__card" key={product.id}>
              <div className="bidder__product__icons">
                <LuClipboardEdit
                  className="edit-icon"
                  onClick={() => handleEditClick(index)}
                />
                <FaTrash
                  className="delete-icon"
                  onClick={() => handleDeleteClick(product.id)}
                />
              </div>
              <div>
                <img
                  src={product.image}
                  alt=""
                  className="bidder__product__img"
                />
              </div>
              <div className="bidder__product__content">
                <div className="bidder__product__title">{product.name}</div>
              </div>

              <div className="bidder__product__box">
                <div className="bidder__product__price">
                  SP: ${product.starting_price}
                </div>
                <a className="bidder__product__btn" href={product.buttonPath} onClick={() => handleBidNow(product)}>
                  Bid Now
                </a>
              </div>
            </div>
            ))
            ) : (
              <p>Loading...</p>
            )}
        </div>
      </section>
    </>
  );
};

export default BidderProduct;
