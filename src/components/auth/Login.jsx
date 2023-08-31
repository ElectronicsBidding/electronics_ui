import React from "react";
import "./auth-style.css";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleButtonClick = () => {
    navigate("/");
  };
  return (
    <>
      <div class="auth-container">
        <div class="auth-box">
          <div class="auth-header">
            <p>Log In to Tech On</p>
          </div>
          <div class="auth-input-box">
            <label for="email">E-Mail</label>
            <input type="email" class="auth-input-field" id="email" required />
            <i class="bx bx-envelope"></i>
          </div>
          <div class="auth-input-box">
            <label for="pass">Password</label>
            <input type="password" class="auth-input-field" id="pass" required />
            <i class="bx bx-lock"></i>
          </div>
          <div class="auth-input-box">
            <input type="submit" class="auth-input-submit" value="SIGN IN" onClick={handleButtonClick}/>
          </div>
          <div class="auth-bottom">
          <span onClick={handleSignUpClick}>Sign Up</span>
            <span>
              Forgot Password?
            </span>
          </div>
        </div>
        <div class="auth-wrapper"></div>
      </div>
    </>
  );
};

export default Login;
