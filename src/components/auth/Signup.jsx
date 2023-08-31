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
          <div className="auth-header">
            <p>Sign Up on Tech On</p>
          </div>
          <div className="auth-input-box">
            <label htmlFor="username">Username</label>
            <input type="username" className="auth-input-field" id="username" required />
            <i className="bx bx-envelope"></i>
          </div>
          <div className="auth-input-box">
            <label htmlFor="email">E-Mail</label>
            <input type="email" className="auth-input-field" id="email" required />
            <i className="bx bx-envelope"></i>
          </div>
          <div className="auth-input-box">
            <label htmlFor="pass">Password</label>
            <input type="password" className="auth-input-field" id="pass" required />
            <i className="bx bx-lock"></i>
          </div>
          <div className="auth-input-box">
            <input type="submit" className="auth-input-submit" value="SIGN UP" onClick={handleButtonClick}/>
          </div>
          <div className="auth-bottom">
            <span>Already a Member?</span>
            <span onClick={handleSignInClick}>Sign in</span>
          </div>
        </div>
        <div className="signup-wrapper"></div>
      </div>
    </>
  );
};

export default Signup;