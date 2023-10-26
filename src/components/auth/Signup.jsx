import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth-style.css";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [image, setImage] = useState();
  const [confirm, setConfirm] = useState();

  const handleSignInClick = () => {
    navigate("/login");
  };

  const handleButtonClick = () => {
    fetch("http://127.0.0.1:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        payload: {
          full_name: name,
          email: email, 
          phone_number: phone, 
          password: password,
        },
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          navigate("/login");
        } else {
          console.error("User registration failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="auth-container" style={{ marginTop: "-10px" }}>
        <div className="signup-box">
          <div style={{ marginLeft: "10px" }}>
            <div className="auth-header">
              <p>Sign Up on Tech On</p>
            </div>
            <div className="auth-input-box">
              <label htmlFor="fullname">Fullname</label>
              <input
                type="text"
                className="auth-input-field"
                id="fullname"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="auth-input-box">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="auth-input-field"
                id="phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="auth-input-box">
              <label htmlFor="email">E-Mail</label>
              <input
                type="email"
                className="auth-input-field"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="auth-input-box">
              <label htmlFor="pass">Password</label>
              <input
                type="password"
                className="auth-input-field"
                id="pass"
                required
                alue={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="auth-input-box">
              <input
                type="submit"
                className="auth-input-submit"
                value="SIGN UP"
                onClick={handleButtonClick}
              />
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
