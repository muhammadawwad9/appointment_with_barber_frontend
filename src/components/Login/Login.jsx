import React, { useState } from "react";

import "./Login.css";
//components
import Title from "../Public/Title";
import Buttons from "../Public/Buttons";
import Inputs from "../Public/Inputs";

//Login component
const Login = (props) => {
  //states
  const [objToSend, setObjToSend] = useState({
    pass: "",
  });

  const localServer = `http://localhost:4000/`;
  console.log(objToSend);
  //functions
  const onChangeHandler = (e) => {
    const val = e.target.value;
    if (e.target.type === "password") {
      setObjToSend({ ...objToSend, pass: val });
    } else {
      if (isNaN(val)) {
        setObjToSend({ pass: objToSend.pass, email: val });
      } else {
        setObjToSend({ pass: objToSend.pass, phone: val });
      }
    }
  };

  const onSubmitHandler = (e) => {
    //missing validation in this function I will do it later- Awwad
    e.preventDefault();
    fetch(`${localServer}login`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(objToSend),
    })
      .then((response) => {
        if (response.ok) {
          console.log("RESPONSE IS OK");
          return response.json();
        }
        throw new Error(response.status);
      })
      .then((obj) => {
        console.log("returned obj is: ", obj);
      })
      .catch((err) => console.log("ERRORRRR: ", err));
  };
  return (
    <div className="Login">
      <Title title="LOG IN" />
      <form onSubmit={onSubmitHandler}>
        <Inputs
          type="text"
          id="login-field"
          name="waytologin"
          placeholder="Email/ Phone number"
          icon="img/user.svg"
          alt="user"
          onChangeFunc={onChangeHandler}
        />
        <Inputs
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          icon="img/password.svg"
          alt="password"
          onChangeFunc={onChangeHandler}
        />
        <Buttons text="Log In" />
      </form>
    </div>
  );
};

export default Login;
