import React from "react";
import "./inputs.css";
//props icon, placeholder, type
const Inputs = (props) => {
  return (
    <div className="container">
      <img src={props.icon} alt={props.type} className="icon" />
      <input
        className="inputTransparent"
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        required
        onChange={props.onChangeFunc}
      />
    </div>
  );
};

export default Inputs;
