import React from "react";
import { NavLink } from "react-router";
import ProductDetails from "../../pages/ProductDetails";

const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink to="/product-details">
          <span>product-details</span>
        </NavLink> <br />
        <NavLink to="/">
          <span>Navbar</span>
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
