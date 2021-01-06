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

function setDayWorkingHours(
  year,
  month,
  workingHours,
  numOfDay,
  nameOfDay,
  isWorking,
  diff,
  allDays
) {
  // numofday is the day in database

  let monthnum = 0;
  switch (month) {
    case "January":
      monthnum = 0;
      break;

    case "February":
      monthnum = 1;
      break;
    case "March":
      monthnum = 2;
      break;
    case "April":
      monthnum = 3;
      break;
    case "May":
      monthnum = 4;
      break;
    case "June":
      monthnum = 5;
      break;
    case "July":
      monthnum = 6;
      break;
    case "August":
      monthnum = 7;
      break;
    case "September":
      monthnum = 8;
      break;
    case "October":
      monthnum = 9;
      break;
    case "November":
      monthnum = 10;
      break;
    case "December":
      monthnum = 11;
      break;
  }
  console.log(monthnum);
  var d = new Date();
  d.setFullYear(year, monthnum, 1);

  //   var d = new Date(year, monthnum, 0);
  console.log(d.getMonth());
  console.log(d.getFullYear());

  var numOfDays = daysInMonth(d.getMonth(), d.getFullYear()); //Get total days in a month
  console.log(numOfDays);

  for (var i = 1; i <= numOfDays; i++) {
    //looping through days in month
    var newDate = new Date(d.getFullYear(), d.getMonth(), i);
    const nameInWeek = nameDays[newDate.getDay()];

    if (nameInWeek == nameOfDay) {
      //if Sunday
      // here we can set the working hours for the day example all sundays days
      // we can make object for this day
      let worktimeObj = {
        daynum: i,
        workinghours: workingHours,
        isworking: isWorking,
        diff: diff,
      };
      allDays.push(worktimeObj);
    }
  }
  return allDays;

  // here we can return for all days that nameofday the same object working hours
  // thats include the working hours for all sundays for example
}
let nameDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function checkAllDays() {
  // going over all days to get the ids with start and end hours

  let allDays = [];
  let someThingWrong = false;

  const monthname = document.getElementById("month").value;
  const calendar = {
    month: monthname,
    days: "",
  };
  nameDays.map((elemnt, index) => {
    let isworking = false;
    const startHourElement = document.getElementById(index + "_starthour");
    const endHourElement = document.getElementById(index + "_endhour");
    const endHour = endHourElement.value;
    const startHour = startHourElement.value;
    if (
      Date.parse("01/01/2011 " + endHour) >
      Date.parse("01/01/2011 " + startHour)
    ) {
      isworking = true;
    } else {
      isworking = false;
    }
    const hoursobj = {
      start: startHour,
      end: endHour,
    };
    const wh = [];
    wh.push(hoursobj);

    allDays = setDayWorkingHours(
      2021,
      monthname,
      wh,
      "numOfDay",
      elemnt,
      isworking,
      30,
      allDays
    );
  });
  console.log(allDays);
  calendar.days = allDays;
  return calendar;
}

function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

function make(objToSend) {
  const monthelement = document.getElementById("month");
  if (objToSend.calendar.month) monthelement.value = objToSend.calendar.month;

  //   const daysWithNames = getTheDaysWithNamesFromCalendar(objToSend.calendar.days,objToSend.calendar.month);

  return (
    <div>
      {nameDays.map((elemnt, index) => {
        return (
          <div id={index} className="dayinfo">
            <div className="dayname">{nameDays[index]}</div>
            <div className="starthour">
              <select id={index + "_starthour"} className="starthour">
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

            <div className="endhour">
              <select id={index + "_endhour"} className="endhour">
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
          </div>
        );
      })}
    </div>
  );
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
    api("business/" + props.busID, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        // console.log(response);
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
      case "shopname":
        setObjToSend({ ...objToSend, businessname: val });
        break;
      case "phonenumber":
        setObjToSend({ ...objToSend, phone: val });
        break;
      case "adress":
        setObjToSend({ ...objToSend, businessaddress: val });
        break;
      case "location":
        setObjToSend({ ...objToSend, geolocation: val });
        break;
    }
  };
  // console.log("halaaaaa", objToSend);
  // console.log("nuwraaasssss", userObj);
  //functions
  const onSubmitHandler = (e) => {
    //missing validation in this function I will do it later- Awwad
    e.preventDefault();

    objToSend.calendar = checkAllDays();

    console.log(objToSend);
    // we have to update or add a new business its depends on the props.busID

    if (props.busID) {
      // here we want to update
      api("editbusinsess/" + props.busID, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(objToSend),
      })
        .then((response) => {
          console.log(response);
          if (response.ownerid) {
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
          // console.log("Im in catch");
          console.error(err);
        });
    } else {
      // here we want to create new

      api("newbusiness/", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(objToSend),
      })
        .then((response) => {
          // console.log(response);
          if (response.ownerid) {
            toast.success("Successfully Added ", {
              position: toast.POSITION.BOTTOM_CENTER,
            });
          } else {
            toast.error(response, {
              position: toast.POSITION.BOTTOM_CENTER,
            });
          }
        })
        .catch((err) => {
          // console.log("Im in catch");
          console.error(err);
        });
    }
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
          id="adress"
          name="adress"
          placeholder="Adress"
          icon="img/identification.svg"
          alt="adress"
          value={defultBus.businessaddress}
          onChangeFunc={onChangeHandler}
        />
        <Inputs
          type="text"
          id="location"
          name="location"
          placeholder="Locate me geo"
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
            <div>Week days:</div>
            <div>Start hour:</div>
            <div>End hour:</div>
          </div>
          {make(objToSend)}
        </div>
        <Buttons className="button" text="Save" />
      </form>
    </div>
  );
};

export default CreateNewBusiness;
