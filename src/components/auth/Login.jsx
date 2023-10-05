import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://10.1.40.87:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        navigate("/trending_ads");
      } else {
        console.error("Authentication failed");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Network error:", error);
    }
  };
  

  return (
    <>
      <div class="auth-container">
        <div class="auth-box">
          <div style={{ marginLeft: "10px" }}>
            <div class="auth-header">
              <p>Log In to Tech On</p>
            </div>
            <div class="auth-input-box">
              <label for="email">E-Mail</label>
              <input
                type="email"
                class="auth-input-field"
                id="email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
              <i class="bx bx-envelope"></i>
            </div>
            <div class="auth-input-box">
              <label for="pass">Password</label>
              <input
                type="password"
                class="auth-input-field"
                id="pass"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <i class="bx bx-lock"></i>
            </div>
            <div class="auth-input-box">
              <input
                type="submit"
                class="auth-input-submit"
                value="SIGN IN"
                onClickCapture={() => {
                  handleLogin();
                }}
              />
            </div>
            <div class="auth-bottom">
              <span onClick={handleSignUpClick}>Sign Up</span>
              <span>Forgot Password?</span>
            </div>
          </div>
        </div>
        <div class="auth-wrapper"></div>
      </div>
    </>
  );
};

export default Login;
