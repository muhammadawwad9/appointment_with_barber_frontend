import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import "./style.css";

const Menu = (props) => {
  const logOut = () => {
    localStorage.removeItem("access_token");
    // setUser({});
    toast.error(" نعيما يا غالي ترجعش عنا", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    props.setState(false);
    props.setIsLoggedIn(false);
  };
  const hide = () => {
    props.setState(false);
  };

  return (
    <div className="menu">
      <div className="topmenusection">
        {" "}
        <img
          src="img/menu.svg"
          className="menubaricon"
          onClick={props.menuClick}
        ></img>
      </div>
      {props.isLoggedIn ? (
        <ul>
          <li className="menuComponent">
            <NavLink class="navlink" to="/" onClick={hide}>
              Profile
            </NavLink>
          </li>
          <li className="menuComponent">
            <NavLink class="navlink" to="/" onClick={hide}>
              Favorite Shops
            </NavLink>
          </li>
          <li className="menuComponent">
            <NavLink class="navlink" to="/" onClick={hide}>
              My Appointments
            </NavLink>
          </li>
          <li className="menuComponent">
            <NavLink class="navlink" to="/" onClick={hide}>
              My Businesses
            </NavLink>
          </li>
          <li className="menuComponent">
            {" "}
            <NavLink class="navlink" to="/login" onClick={logOut}>
              Log Out
            </NavLink>
          </li>
        </ul>
      ) : (
        <ul>
          <li className="menuComponent">
            <NavLink class="navlink" to="/" onClick={hide}>
              Login
            </NavLink>
          </li>
          <li className="menuComponent">
            <NavLink class="navlink" to="/" onClick={hide}>
              Signup
            </NavLink>
          </li>{" "}
        </ul>
      )}
    </div>
  );
};

export default Menu;
