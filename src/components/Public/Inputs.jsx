import React from "react";
import "./inputs.css";
//props icon, placeholder, type
const Inputs = (props) => {
  const [state, setState] = React.useState(props.value);
  const handleState = (e) => {
    setState(e.target.value);
    if (props.onChangeFunc) props.onChangeFunc(e);
  };

  React.useEffect(() => {
    setState(props.value);
  }, [props.value]);
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
        onChange={(e) => handleState(e)}
        value={props.search ? props.value : state}
      />
    </div>
  );
};

export default Inputs;
