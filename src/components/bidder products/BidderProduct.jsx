import React from 'react';
import "./bidderProduct.css"
import { FaTrash } from 'react-icons/fa'
import { LuClipboardEdit } from 'react-icons/lu'
import logo from "../../assets/images/logo.png"
import { useNavigate } from "react-router-dom";

const BidderProduct = () => {
  const navigate = useNavigate();

  const productData = [
    {
      title: 'Title 1',
      category: 'Category 1',
      price: 50,
      imageUrl: logo,
      buttonPath: "/user_product",
    },
    {
      title: 'Title 2',
      category: 'Category 2',
      price: 50,
      imageUrl: logo,
      buttonPath: "/bidder_product",
    },
    {
      title: 'Title 3',
      category: 'Category 3',
      price: 50,
      imageUrl: logo,
      buttonPath: "/user_product",
    },
    {
      title: 'Title 4',
      category: 'Category 4',
      price: 50,
      imageUrl: logo,
      buttonPath: "/bidder_product",
    },
    {
      title: 'Title 5',
      category: 'Category 5',
      price: 50,
      imageUrl: logo,
      buttonPath: "/user_product",
    },
    {
      title: 'Title 6',
      category: 'Category 6',
      price: 50,
      imageUrl: logo,
      buttonPath: "/bidder_product",
    },
    {
      title: 'Title 7',
      category: 'Category 7',
      price: 50,
      imageUrl: logo,
      buttonPath: "/user_product",
    },
  ];

  const handleEditClick = () => {
    navigate("/edit_post");
  };

  const handleDeleteClick = () => {
    navigate("/profile");
  };

  return (
    <section className="bidder__product__sec">
    <div className="bidder__products">
      {productData.map((product, index) => (
        <div className="bidder__product__card" key={index}>
          <div className="bidder__product__icons">
            <LuClipboardEdit className="edit-icon" onClick={() => handleEditClick(index)} />
            <FaTrash className="delete-icon" onClick={() => handleDeleteClick(index)} />
          </div>
          <div>
            <img src={product.imageUrl} alt="" className="bidder__product__img"/>
          </div>
          <div className="bidder__product__content">
            <div className="bidder__product__title">{product.title}</div>
            <div className="bidder__product__category">{product.category}</div>
          </div>

          <div className="bidder__product__box">
            <div className="bidder__product__price">SP: ${product.price}</div>
            <a className="bidder__product__btn" href={product.buttonPath}>Bid Now</a>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
};

export default BidderProduct;
