import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch("http://127.0.0.1:3000/users/sign_in", {
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
        if (data["success"]){
          localStorage.setItem("token", data["jwt"]);
          localStorage.setItem("username", data["user"]["full_name"]);
          localStorage.setItem("email", data["user"]["email"]);
          localStorage.setItem("phone_number", data["user"]["phone_number"]);
          localStorage.setItem("user_id", data["user"]["id"]);
          navigate("/trending_ads");
        }
      } else {
        console.error("Authentication failed");
      }
    } catch (error) {
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
                  handleLogin(email, password);
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
