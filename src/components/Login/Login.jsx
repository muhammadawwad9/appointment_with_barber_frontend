import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Login.css";
//components
import Title from "../Public/Title";
import Buttons from "../Public/Buttons";
import Inputs from "../Public/Inputs";

//Login component
const Login = ({ isLoggedIn, setIsLoggedIn }) => {
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
      .then((response) => response.json())
      .then((obj) => {
        if (obj.access_token) {
          console.log("THE OBJ IS: ", obj);
          toast.success(obj.msg);
          localStorage.setItem("access_token", obj.access_token);
          setIsLoggedIn(true);
        } else {
          toast.error(obj);
        }
      })
      .catch((err) => {
        console.error(err);
      });
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
