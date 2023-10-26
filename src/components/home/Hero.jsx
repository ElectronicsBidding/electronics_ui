import React, { useEffect, useState, useRef } from "react";
import "./hero.css";
import hero from "../../assets/images/hero.svg";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import bat from "../../assets/images/bat.json";

const Hero = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [user, setUser] = useState([]);

  const phoneRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 20000);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productResponse, userResponse] = await Promise.all([
          fetch("http://127.0.0.1:3000/products").then((response) =>
            response.json()
          ),
          fetch("http://127.0.0.1:3000/users").then((response) =>
            response.json()
          ),
        ]);
        setProduct(productResponse.data);
        setUser(userResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    setTimeout(fetchData, 2000);
  }, []);

  if (loading) {
    return (
      <div>
        <Lottie
          loop={true}
          lottieRef={phoneRef}
          animationData={bat}
          style={{
            width: "20%",
            marginLeft: "40%",
            marginTop: "10%",
          }}
        />
      </div>
    );
  }

  return (
    <>
      <section className="hero__section">
        <div>
          <div className="hero__wrapper">
            <div className="hero__content">
              <div>
                {/* <p className="sm-highlight">Brand New</p> */}
                <h2>Meet The Tech</h2>
                <h2>
                  From The <span className="highlight">Future</span>
                </h2>
              </div>
              <br></br>
              <p className="description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
                expedita modi fugit neque, itaque voluptate laudantium
              </p>
              <br></br>
              <br></br>

              <div className="hero__statstics">
                <div className="stat__content">
                  <h2>{user.length}</h2>
                  <p>Suppliers</p>
                </div>

                <div className="stat__content">
                  <h2>{user.length}</h2>
                  <p>Customers</p>
                </div>

                <div className="stat__content">
                  <h2>{product.length}</h2>
                  <p>Trades</p>
                </div>
              </div>

              <div className="hero__btns">
                <button className="primary__btn">Get Started Now</button>

                <button className="secondary__btn">Discover More</button>
              </div>
            </div>

            <div className="hero__img">
              <img src={hero} alt="hero-img" className="hero__img__img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
