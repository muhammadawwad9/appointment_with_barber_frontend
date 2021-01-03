import logo from "./logo.svg";
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
//components imports
import Inputs from "./components/Public/Inputs";
import Title from "./components/Public/Title";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import Buttons from "./components/Public/Buttons";
import Card from "./components/Public/Card";
import Login from "./components/Login/Login";
import Businesses from "./components/Businesses/Businesses";
toast.configure();

function App() {
  const [state, setState] = React.useState(false);
  const menuClick = () => {
    console.log("clicked!");
    setState(!state);
    console.log(state);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to="login" />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/getbusiness">
            <Businesses />
          </Route>
          <Navbar />
          <Businesses />

          {/* <Menu />
      <Navbar username="Nuwrss" menuClick={menuClick} />
      {state == true ? <Menu menuClick={menuClick} /> : null}

      <Title title="LOG IN" />
      <Inputs icon="img/profile-user.svg" type="email" placeholder="email" />

      <Buttons text="Login" />
      <Card businessName="cut pro" location="waze://tamra" avg="4.3" />
      <Card businessName="perfect cut" location="waze://Kafr-Qara" avg="4.14" />*/}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
