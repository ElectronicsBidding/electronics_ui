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
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={logo} alt='logo' style={{width: "100px", height: "100px"}} />
        </NavLink>
        <Bars onClick={toggle}/>
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;