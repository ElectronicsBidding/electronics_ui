import React from "react";
import "./hero.css";
import hero from "../../assets/images/hero.svg";

const Hero = () => {
  return (
    <>
      <section className="hero__section">
        <div>
          <div className="hero__wrapper">
            <div className="hero__content">
              <div>
                <p className="sm-highlight">Brand New</p>
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
                  <h2>200K+</h2>
                  <p>Suppliers</p>
                </div>

                <div className="stat__content">
                  <h2>410K+</h2>
                  <p>Customers</p>
                </div>

                <div className="stat__content">
                  <h2>890K+</h2>
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
