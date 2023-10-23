import React, { useEffect, useState} from 'react'
import "./profile.css"
import logo from "../../assets/images/logo.png"
import { useNavigate } from "react-router-dom";
import BidderProduct from '../bidder products/BidderProduct';

const Profile = () => {
  
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleCreateClick = () => {
    navigate("/create_post");
  };

  return (
    <>
    <div className="profile__container">
        <div className="profile__details">
            <div style={{display: "flex", alignItems: "center", flexDirection: "column"}} key={user.id}>
                <img src={logo} alt="" className='profile__image'/>
                <h1>{localStorage.getItem("username")}</h1>

                <div className='profile__info'>
                    <h2>Email</h2>
                    <h2 style={{fontWeight: "400"}}>{localStorage.getItem("email")}</h2>
                </div>

                <div className='profile__info'>
                    <h2>Country</h2>
                    <h2 style={{fontWeight: "400"}}>Addis Ababa, Ethiopia</h2>
                </div>

                <div className='profile__info'>
                    <h2>Phone Number</h2>
                    <h2 style={{fontWeight: "400"}}>{localStorage.getItem("phone_number")}</h2>
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
                <BidderProduct />
            </div>

        </div>
    </div>
    </>
  )
}

export default Profile