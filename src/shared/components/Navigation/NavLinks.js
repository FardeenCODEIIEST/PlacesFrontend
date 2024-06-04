import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";

// exact makes the Navlink active and apply specific styles --> deprecated now use end
const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink end to="/">
          ALL USERS
        </NavLink>
      </li>
      <li>
        <NavLink to="/u1/places">MY PLACES</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">ADD PLACE</NavLink>
      </li>
      <li>
        <NavLink to="/auth">AUTHENTICATE</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
