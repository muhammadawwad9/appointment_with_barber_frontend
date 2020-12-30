import React from "react";
import "./inputs.css";
//props icon, placeholder, type
const Inputs = (props) => {
  return (
    <div className="container">
      <img src={props.icon} alt={props.type} className="icon"></img>
      <input
        className="inputTransparent"
        type={props.type}
        id={props.type}
        name={props.type}
        placeholder={props.placeholder}
        required
      />
    </div>
  );
};

export default Inputs;
