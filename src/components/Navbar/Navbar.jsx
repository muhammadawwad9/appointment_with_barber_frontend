import React from "react";
import "./style.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <img
        src="img/menu.svg"
        className="menubaricon"
        onClick={props.menuClick}
      ></img>
      <div className="navbarcontent">
        <p>We make your style</p>
        {props.isLoggedIn ? (
          <span>
            Hello, {props.username[0].toUpperCase() + props.username.slice(1)}
            {/* Hello {props.username} */}
          </span>
        ) : null}
      </div>
      <img src="img/logo2.png" className="menubaricon"></img>
    </div>
  );
};

export default Navbar;
