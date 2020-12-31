import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Inputs from "./components/Public/Inputs";
import Title from "./components/Public/Title";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
//components
import Buttons from "./components/Public/Buttons";
import Card from "./components/Public/Card";

function App() {
  const [state, setState] = React.useState(false);
  const menuClick = () => {
    console.log("clicked!");
    setState(!state);
    console.log(state);
  };
  return (
    <div className="App">
      <Navbar username="Nuwrss" menuClick={menuClick} />
      {state == true ? <Menu menuClick={menuClick} /> : null}

      <Title title="LOG IN" />
      <Inputs icon="img/profile-user.svg" type="email" placeholder="email" />

      <Buttons text="Login" />
      <Card businessName="cut pro" location="waze://tamra" avg="4.3" />
      <Card businessName="perfect cut" location="waze://Kafr-Qara" avg="4.14" />
    </div>
  );
}

export default App;
