import React, { useState, useEffect } from "react";
import "./form.css";
import Head from "../../pages/Head";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [interval, setInterval] = useState("");
  const [status, setStatus] = useState("available");
  const [image, setImage] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategory(data["data"]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  const HandleCreateClick = (e) => {
    e.preventDefault();
    
    const productData = {
      name,
      starting_price: price,
      location,
      category_id: selectedCategory,
      bid_interval: interval,
      status,
      image,
      bidding_end_time: endTime,
      description,
      seller_id: localStorage.getItem("user_id"),
      buyer_id: localStorage.getItem("user_id"),
    };
  
    axios
      .post("http://127.0.0.1:3000/products", { payload: productData })
      .then((response) => {
        navigate("/profile");
      })
      .catch((error) => {
        console.error("Error creating product:", error);
      });
  };
  


  return (
    <>
      <Head />
      <div className="form-container" style={{ marginTop: "-10px" }}>
        <div className="form-box">
          <div style={{ marginLeft: "20px" }}>
            <div className="form-header">
              <p>Create Your Post</p>
            </div>
            <form encType="multipart/form-data">
              <div className="form-input-box">
                <div>
                  <label htmlFor="itemName">Item Name</label>
                  <input
                    type="text"
                    className="form-input-field"
                    id="itemName"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
  
                <div>
                  <label htmlFor="startingPrice">Starting Price</label>
                  <input
                    type="text"
                    className="form-input-field"
                    id="startingPrice"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
  
              <div className="form-input-box">
                <div>
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    className="form-input-field"
                    style={{ marginRight: "100%" }}
                    id="location"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
  
                <div>
                  <label style={{ marginLeft: "-16%" }} htmlFor="status">
                    Item Category
                  </label>
                  <select
                    type="text"
                    style={{
                      width: "107%",
                      height: "40px",
                      marginLeft: "-16%",
                      marginTop: "3%",
                      borderRadius: "5px",
                      paddingLeft: "10px",
                    }}
                    id="status"
                    required
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {category.map((categoryItem) => (
                      <option key={categoryItem.id} value={categoryItem.id}>
                        {categoryItem.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
  
              <div className="form-input-box">
                <div>
                  <label htmlFor="location">Bidding Interval</label>
                  <input
                    type="text"
                    className="form-input-field"
                    id="location"
                    required
                    value={interval}
                    onChange={(e) => setInterval(e.target.value)}
                    />
                </div>
  
                <div>
                  <label htmlFor="location">Status</label>
                  <input
                    type="text"
                    className="form-input-field"
                    id="location"
                    required
                    value={"available"}
                    style={{marginLeft: "-9%", marginTop: "2%"}}
                    />
                </div>
              </div>
  
              <div className="form-input-box">
                <div>
                  <label htmlFor="image">Item Image</label>
                  <input
                    type="text"
                    className="form-input-field"
                    style={{ paddingTop: "5px" }}
                    id="image"
                    required
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                  />
                </div>
  
                <div style={{ paddingLeft: "15px" }}>
                  <label htmlFor="endBidding">End of Bidding Time</label>
                  <input
                    type="date"
                    className="form-input-field"
                    id="endBidding"
                    required
                    onChange={(e) => setEndTime(e.target.value)}
                    value={endTime}
                  />
                </div>
              </div>
  
              <div className="form-input-box" style={{ flexDirection: "column" }}>
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-input-field"
                  style={{ paddingTop: "5px", width: "95%", height: "120px" }}
                  id="description"
                  required
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
              </div>
  
              <div class="form-input-box">
                <input
                  type="submit"
                  class="form-input-submit"
                  value="Create Post"
                  style={{ width: "96%", fontSize: "18px", height: "60px" }}
                  onClick={HandleCreateClick}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="form-wrapper"></div>
      </div>
    </>
  );
};

export default Create;
