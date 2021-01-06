import React from "react";
import "./HourBox.css";

//functions imports
import api from "../api/api";

const HourBox = ({ hour, calendarName, businessId }) => {
  const clickHandler = () => {
    const obj = {
      day: calendarName,
      hour: hour,
      businessId: businessId,
    };
    console.log("The obj(parsed) is: ", obj);
    console.log("The obj(stringified) is: ", JSON.stringify(obj));

    api("appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(obj),
    })
      .then((appointments) => {
        console.log("you appointments are: ", appointments);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div onClick={clickHandler} className="HourBox">
      {hour}
    </div>
  );
};

export default HourBox;
