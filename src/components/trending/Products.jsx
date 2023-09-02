import React from 'react';
import './products.css';
import logo from "../../assets/images/logo.png"

const Products = () => {
  const productData = [
    {
      title: 'Title 1',
      category: 'Category 1',
      price: 50,
      imageUrl: logo,
      buttonPath: "/",
    },
    {
      title: 'Title 2',
      category: 'Category 2',
      price: 50,
      imageUrl: logo,
      buttonPath: "/",
    },
    {
      title: 'Title 3',
      category: 'Category 3',
      price: 50,
      imageUrl: logo,
      buttonPath: "/",
    },
    {
      title: 'Title 4',
      category: 'Category 4',
      price: 50,
      imageUrl: logo,
      buttonPath: "/",
    },
    {
      title: 'Title 5',
      category: 'Category 5',
      price: 50,
      imageUrl: logo,
      buttonPath: "/",
    },
    {
      title: 'Title 6',
      category: 'Category 6',
      price: 50,
      imageUrl: logo,
      buttonPath: "/",
    },
    {
      title: 'Title 7',
      category: 'Category 7',
      price: 50,
      imageUrl: logo,
      buttonPath: "/",
    },
  ];

  return (
    <section className="product__sec">
      <div className="products">
        {productData.map((product, index) => (
          <div className="product__card" key={index}>
            <div>
              <img src={product.imageUrl} alt="" className="product__img"/>
            </div>
            <div className="product__content">
              <div className="product__title">{product.title}</div>
              <div className="product__category">{product.category}</div>
            </div>

            <div className="product__box">
              <div className="product__price">SP: ${product.price}</div>
              <a className="product__btn" href={product.buttonPath}>Bid Now</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
