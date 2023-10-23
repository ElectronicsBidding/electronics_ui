import React from 'react';
import logo from "../../assets/images/logo.png"
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './Elements';

const Navbar = ({ toggle }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
  }
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={logo} alt='logo' style={{width: "100px", height: "100px"}} />
        </NavLink>
        <Bars onClick={toggle}/>
        <NavMenu>
        <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/trending_ads' activeStyle>
            Trending
          </NavLink>
          <NavLink to='/profile' activeStyle>
            Profile
          </NavLink>
          <NavLink to='/watchlist' activeStyle>
            Watchlist
          </NavLink>
        </NavMenu>
        <NavBtn>
          {localStorage.getItem("token") ? (
            <NavBtnLink onClick={handleLogout} to='/login'>Logout</NavBtnLink>
          ) : (
            <NavBtnLink to='/login'>Login</NavBtnLink>
          )}
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;