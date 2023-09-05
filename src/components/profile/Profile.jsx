import React from 'react'
import "./profile.css"
import Products from "../trending/Products"
import logo from "../../assets/images/logo.png"
import { useNavigate } from "react-router-dom";

const Profile = () => {
  
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate("/create_post");
  };

  return (
    <>
    <div className="profile__container">
        <div className="profile__details">
            <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                <img src={logo} alt="" className='profile__image'/>
                <h1>Betemariam Abenet</h1>

                <div className='profile__info'>
                    <h2>Email</h2>
                    <h2 style={{fontWeight: "400"}}>betemariam.abenet@bits.com</h2>
                </div>

                <div className='profile__info'>
                    <h2>Country</h2>
                    <h2 style={{fontWeight: "400"}}>Addis Ababa, Ethiopia</h2>
                </div>

                <div className='profile__info'>
                    <h2>Address</h2>
                    <h2 style={{fontWeight: "400"}}>Bole, Figa Mebrat Hail</h2>
                </div>

                <div className='profile__info'>
                    <h2>Phone Number</h2>
                    <h2 style={{fontWeight: "400"}}>0977889977</h2>
                </div>
            </div>
        </div>

        <div className="ads__post">

            <div className="ads__header">
                <h1>Your Ads</h1>
                <a className="create_btn" onClick={handleCreateClick}>Post</a>
            </div>
            <hr></hr>

            <div style={{marginLeft: "25px"}}>
                <Products />
            </div>

        </div>
    </div>
    </>
  )
}

export default Profile