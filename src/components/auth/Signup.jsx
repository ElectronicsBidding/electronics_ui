import React from "react";
import { useNavigate } from "react-router-dom";
import "./auth-style.css";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/login");
  };

  const handleButtonClick = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="auth-container" style={{ marginTop: "-10px" }}>
        <div className="signup-box">
          <div style={{marginLeft: "10px"}}>
            <div className="auth-header">
              <p>Sign Up on Tech On</p>
            </div>
            <div className="auth-input-box">
              <label htmlFor="fullname">Fullname</label>
              <input type="text" className="auth-input-field" id="fullname" required />
            </div>
            <div className="auth-input-box">
              <label htmlFor="country">Country</label>
              <input type="text" className="auth-input-field" id="country" required />
            </div>
            <div className="auth-input-box">
              <label htmlFor="email">E-Mail</label>
              <input type="email" className="auth-input-field" id="email" required />
            </div>
            <div className="auth-input-box">
              <label htmlFor="pass">Password</label>
              <input type="password" className="auth-input-field" id="pass" required />
            </div>
            <div className="auth-input-box">
              <input type="submit" className="auth-input-submit" value="SIGN UP" onClick={handleButtonClick}/>
            </div>
            <div className="auth-bottom">
              <span>Already a Member?</span>
              <span onClick={handleSignInClick}>Sign in</span>
            </div>
          </div>
        </div>
        <div className="signup-wrapper"></div>
      </div>
    </>
  );
};

export default Signup;