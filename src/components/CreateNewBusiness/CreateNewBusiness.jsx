import React, { useState } from "react";
import { toast } from "react-toastify";
import "./profile.css";
import { useHistory } from "react-router-dom";
import api from "../api/api";

//components
import Title from "../Public/Title";
import Buttons from "../Public/Buttons";
import Inputs from "../Public/Inputs";
import { logDOM } from "@testing-library/react";
let userObj = JSON.parse(localStorage.getItem("userObj"));
//Login component

const CreateNewBusiness = (props) => {
  //states
  const history = useHistory();
  const [defultBus, setDefultBus] = useState({
    // all variables are = ""
  });
  const [objToSend, setObjToSend] = useState({
    email: userObj.email,
    phone: userObj.phone,
    firstname: userObj.firstname,
    lastname: userObj.lastname,
    isBusinessOwner: userObj.isBusinessOwner,
  });

  // if we get busID from props then its update business if not its a new business
  // so if yes we have to get the bus from the server and set the data on the fields and then we can update
  // the data and save it
  if (props.busID) {
    api("updateUser/", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        console.log(response);
        setDefultBus(response); // here we get the bus from the server by his id
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //functions
  const onChangeHandler = (e) => {
    const val = e.target.value;
    switch (e.target.id) {
      case "email":
        setObjToSend({ ...objToSend, email: val });
        break;
      case "phonenumber":
        setObjToSend({ ...objToSend, phone: val });
        break;
      case "firstname":
        setObjToSend({ ...objToSend, firstname: val });
        break;
      case "lastname":
        setObjToSend({ ...objToSend, lastname: val });
        break;
    }
  };
  console.log("halaaaaa", objToSend);
  console.log("nuwraaasssss", userObj);
  //functions
  const onSubmitHandler = (e) => {
    //missing validation in this function I will do it later- Awwad
    e.preventDefault();

    // we have to update or add a new business its depends on the props.busID

    if (props.busID) {
      // here we want to update
    } else {
      // here we want to create new
    }

    api("updateUser/", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(objToSend),
    })
      .then((response) => {
        console.log(response);
        if (response.userObj) {
          localStorage.setItem("userObj", JSON.stringify(response.userObj));
          userObj = JSON.parse(localStorage.getItem("userObj"));

          toast.success("Successfully Updated ", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        } else {
          toast.error(obj, {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      })
      .catch((err) => {
        console.log("Im in catch");
        console.error(err);
      });
  };

  return (
    <div className="editProfile">
      <Title title="Add / Edit Business" />
      <form onSubmit={onSubmitHandler}>
        <Inputs
          type="email"
          id="email"
          name="waytologin"
          placeholder="Email"
          icon="img/user.svg"
          alt="user"
          value={userObj.email}
          onChangeFunc={onChangeHandler}
        />
        <Inputs
          type="number"
          id="phonenumber"
          name="phonenumber"
          placeholder="Phone number"
          icon="img/phone-call.svg"
          alt="phonenumber"
          value={userObj.phone}
          onChangeFunc={onChangeHandler}
        />
        <Inputs
          type="text"
          id="firstname"
          name="firstname"
          placeholder="First name"
          icon="img/identification.svg"
          alt="firstname"
          value={userObj.firstname}
          onChangeFunc={onChangeHandler}
        />
        <Inputs
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Last name"
          icon="img/identification.svg"
          alt="lastname"
          value={userObj.lastname}
          onChangeFunc={onChangeHandler}
        />

        <Buttons className="button" text="Save" />
      </form>
    </div>
  );
};

export default CreateNewBusiness;
