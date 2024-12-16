import React from "react";
import { NavLink } from "react-router";
import ProductDetails from "../../pages/ProductDetails";
import "./index.css"
import olchaLogo from "../../assets/olcha-logo.png"

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav__wrapper">
          <div>
            <img style={{
              width: "150px"
            }} src={olchaLogo} alt="" />
          </div>
        <NavLink to="/">
          <span>Home</span>
        </NavLink> <br />
        <NavLink to="/about">
          <span>About</span>
        </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
