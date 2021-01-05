import React, { useState } from "react";
import { toast } from "react-toastify";
import "./createnewbusiness.css";
import { useHistory } from "react-router-dom";
import api from "../api/api";

//components
import Title from "../Public/Title";
import Buttons from "../Public/Buttons";
import Inputs from "../Public/Inputs";
import { logDOM } from "@testing-library/react";
let userObj = JSON.parse(localStorage.getItem("userObj"));
//Login component

function setDayWorkingHours(year, month, workingHours, numOfDay, nameOfDay) {
  // numofday is the day in database
  var d = new Date(year, month, 0);

  var getTot = daysInMonth(d.getMonth(), d.getFullYear()); //Get total days in a month
  for (var i = 1; i <= getTot; i++) {
    //looping through days in month
    var newDate = new Date(d.getFullYear(), d.getMonth(), i);
    if (newDate.getDay() == nameOfDay) {
      //if Sunday
      // here we can set the working hours for the day example all sundays days
      // we can make object for this day
    }
  }

  // here we can return for all days that nameofday the same object working hours
  // thats include the working hours for all sundays for example
}
function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
function make() {
  let nameDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  for (let index = 0; index < nameDays.length; index++) {
    console.log("day");
    <div id={index} className="dayinfo">
      <div className="dayname">{nameDays[index]}</div>
      <div id={index + "_starthour"} className="starthour">
        <select>
          <option value="00:00">00:00 </option>
          <option value="00:30">00:30 </option>
          <option value="1:00">1:00 </option>
          <option value="1:30">1:30 </option>
          <option value="2:00">2:00 </option>
          <option value="2:30">2:30 </option>
          <option value="3:00">3:00 </option>
          <option value="3:30">3:30 </option>
          <option value="4:00">4:00 </option>
          <option value="4:30">4:30 </option>
          <option value="5:00">5:00 </option>
          <option value="5:30">5:30 </option>
          <option value="6:00">6:00 </option>
          <option value="6:30">6:30 </option>
          <option value="7:00">7:00 </option>
          <option value="7:30">7:30 </option>
          <option value="8:00">8:00 </option>
          <option value="8:30">8:30 </option>
          <option value="9:00">9:00 </option>
          <option value="9:30">9:30 </option>
          <option value="10:00">10:00 </option>
          <option value="10:30">10:30 </option>
          <option value="11:00">11:00 </option>
          <option value="11:30">11:30 </option>
          <option value="12:00">12:00 </option>
          <option value="12:30">12:30 </option>
          <option value="13:00">13:00 </option>
          <option value="13:30">13:30 </option>
          <option value="14:00">14:00 </option>
          <option value="14:30">14:30 </option>
          <option value="15:00">15:00 </option>
          <option value="15:30">15:30 </option>
          <option value="16:00">16:00 </option>
          <option value="16:30">16:30 </option>
          <option value="17:00">17:00 </option>
          <option value="17:30">17:30 </option>
          <option value="18:00">18:00 </option>
          <option value="18:30">18:30 </option>
          <option value="19:00">19:00 </option>
          <option value="19:30">19:30 </option>
          <option value="20:00">20:00 </option>
          <option value="20:30">20:30 </option>
          <option value="21:00">21:00 </option>
          <option value="21:30">21:30 </option>
          <option value="22:00">22:00 </option>
          <option value="22:30">22:30 </option>
          <option value="23:00">23:00 </option>
          <option value="23:30">23:30 </option>
        </select>
      </div>

      <div id={index + "_endhour"} className="endhour">
        <select>
          <option value="00:00">00:00 </option>
          <option value="00:30">00:30 </option>
          <option value="1:00">1:00 </option>
          <option value="1:30">1:30 </option>
          <option value="2:00">2:00 </option>
          <option value="2:30">2:30 </option>
          <option value="3:00">3:00 </option>
          <option value="3:30">3:30 </option>
          <option value="4:00">4:00 </option>
          <option value="4:30">4:30 </option>
          <option value="5:00">5:00 </option>
          <option value="5:30">5:30 </option>
          <option value="6:00">6:00 </option>
          <option value="6:30">6:30 </option>
          <option value="7:00">7:00 </option>
          <option value="7:30">7:30 </option>
          <option value="8:00">8:00 </option>
          <option value="8:30">8:30 </option>
          <option value="9:00">9:00 </option>
          <option value="9:30">9:30 </option>
          <option value="10:00">10:00 </option>
          <option value="10:30">10:30 </option>
          <option value="11:00">11:00 </option>
          <option value="11:30">11:30 </option>
          <option value="12:00">12:00 </option>
          <option value="12:30">12:30 </option>
          <option value="13:00">13:00 </option>
          <option value="13:30">13:30 </option>
          <option value="14:00">14:00 </option>
          <option value="14:30">14:30 </option>
          <option value="15:00">15:00 </option>
          <option value="15:30">15:30 </option>
          <option value="16:00">16:00 </option>
          <option value="16:30">16:30 </option>
          <option value="17:00">17:00 </option>
          <option value="17:30">17:30 </option>
          <option value="18:00">18:00 </option>
          <option value="18:30">18:30 </option>
          <option value="19:00">19:00 </option>
          <option value="19:30">19:30 </option>
          <option value="20:00">20:00 </option>
          <option value="20:30">20:30 </option>
          <option value="21:00">21:00 </option>
          <option value="21:30">21:30 </option>
          <option value="22:00">22:00 </option>
          <option value="22:30">22:30 </option>
          <option value="23:00">23:00 </option>
          <option value="23:30">23:30 </option>
        </select>
      </div>
    </div>;
  }
}

const CreateNewBusiness = (props) => {
  //states
  const history = useHistory();
  const [defultBus, setDefultBus] = useState({
    businessname: "",
    ownerid: "",
    phone: "",
    businessaddress: "",
    geolocation: "",
    calendar: "",
  });

  const [objToSend, setObjToSend] = useState({
    businessname: defultBus.businessname,
    ownerid: defultBus.ownerid,
    phone: defultBus.phone,
    businessaddress: defultBus.businessaddress,
    geolocation: defultBus.geolocation,
    calendar: defultBus.calendar,
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
          toast.error(response, {
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
    <div className="addEditBusiness">
      <Title title="Add/ Edit Business" />
      <form onSubmit={onSubmitHandler}>
        <Inputs
          type="text"
          id="shopname"
          name="shopname"
          placeholder="Shop's Name"
          icon="img/user.svg"
          alt="shopname"
          value={defultBus.businessname}
          onChangeFunc={onChangeHandler}
        />
        <Inputs
          type="number"
          id="phonenumber"
          name="phonenumber"
          placeholder="Phone Number"
          icon="img/phone-call.svg"
          alt="phonenumber"
          value={defultBus.phone}
          onChangeFunc={onChangeHandler}
        />
        <Inputs
          type="text"
          id="location"
          name="location"
          placeholder="Locate me"
          icon="img/identification.svg"
          alt="location"
          value={defultBus.businessaddress}
          onChangeFunc={onChangeHandler}
        />
        <div className="choosemonth">
          <label htmlFor="month">Choose a month:</label>

          <select name="month" id="month">
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>

        <div id="weekinfo">
          <div className="dayinfo">
            <div className="day">Week days:</div>
            <div className="starthour">Start hour:</div>
            <div className="endhour">End hour:</div>
          </div>
          {make()}
        </div>
        <Buttons className="button" text="Save" />
      </form>
    </div>
  );
};

export default CreateNewBusiness;
