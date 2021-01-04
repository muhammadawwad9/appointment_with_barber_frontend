import React from "react";
import "./style.css";

const Menu = (props) => {
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
        <div>
          <div className="menuComponent">Profile</div>
          <div className="menuComponent">Favorite Shops</div>
          <div className="menuComponent">My Appointments</div>
          <div className="menuComponent">My Businesses</div>
          <div className="menuComponent">Logout</div>
        </div>
      ) : (
        <div>
          {" "}
          <div className="menuComponent">Login</div>
          <div className="menuComponent"> Signup</div>
        </div>
      )}
    </div>
  );
};

export default Menu;
