import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const menuClick = () => {
    console.log("clicked!");
    setState(!state);
    console.log(state);
  };

  console.log("STATE IS:  ", isLoggedIn);

  //useEffect, checking the local storage to see if the user is logged in
  useEffect(() => {
    const access_token = window.localStorage.getItem("access_token");
    if (access_token) setIsLoggedIn(true);
    else setIsLoggedIn(false);
  }, [isLoggedIn]);
  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} username="Nuwrss" menuClick={menuClick} />
      {state == true ? (
        <Menu isLoggedIn={isLoggedIn} menuClick={menuClick} />
      ) : null}
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login">
            {isLoggedIn ? (
              <Redirect to="/getbusiness" />
            ) : (
              <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            )}
          </Route>
          <Route exact path="/getbusiness">
            <Businesses />
          </Route>
          <Navbar />
          <Businesses />

          {/*
      
      

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
