import React, { useEffect, useState } from 'react';
import './products.css';

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:3000/products')
      .then((response) => response.json())
      .then((data) => {
        setProductData(data["data"]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  return (
    <section className="product__sec">
      <div className="products">
        {productData.length > 0 ? (
          productData.map((product, index) => (
            <div className="product__card" key={index}>
              <div>
                <img src={product.image} alt="" className="product__img" />
              </div>
              <div className="product__content">
                <div className="product__title">{product.name}</div>
                <div className="product__category">{product.category_id}</div>
              </div>

              <div className="product__box">
                <div className="product__price">SP: ${product.starting_price}</div>
                <a className="product__btn" href={"/user_product"}>Bid Now</a>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default Products;
