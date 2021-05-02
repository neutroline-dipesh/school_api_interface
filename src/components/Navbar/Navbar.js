import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  //    using state to handle the hamburger menu
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  // const closeMobileMenu = () => setClick(false);

  return (
    <nav className="NavbarItems">
      {/* creating hamburger menu hereunder */}
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {/* mapping the data from menuitems to the Navigation Menu */}
        {MenuItems.map((item, index) => {
          return (
            <li key={index} className="single-row">
              <div
                id={item.cName}
                className={
                  window.location.pathname === item.url ? "active" : ""
                }
              >
                <Link className="nav-modlink" to={item.url}>
                  <span onClick={handleClick}>{item.title}</span>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
