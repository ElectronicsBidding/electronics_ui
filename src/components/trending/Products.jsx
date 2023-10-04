import React, { useEffect, useState } from 'react';
import './products.css';

const Products = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3000/products')
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
      console.log(productData);
  }, []);


  return (
    <section className="product__sec">
      <div className="products">
        {productData.map((product, index) => (
          <div className="product__card" key={index}>
            <div>
              <img src={product.image} alt="" className="product__img"/>
            </div>
            <div className="product__content">
              <div className="product__title">{product.name}</div>
              <div className="product__category">{product.category_id}</div>
            </div>

            <div className="product__box">
              <div className="product__price">SP: ${product.starting_price}</div>
              <a className="product__btn" href={product.buttonPath}>Bid Now</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
