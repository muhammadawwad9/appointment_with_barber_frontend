import React, { useState } from "react";
import { toast } from "react-toastify";
import "./HourBox.css";

//functions imports
import api from "../api/api";

const HourBox = ({
  hour,
  calendarName,
  businessId,
  setChanges,
  setUser,
  full,
}) => {
  //functions
  const clickHandler = () => {
    const obj = {
      day: calendarName,
      hour: hour,
      businessId: businessId,
    };
    api("appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(obj),
    })
      .then((appointments) => {
        toast.success("The Appointment is Set ", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
        setChanges((prev) => !prev);
        setUser((prev) => {
          const newObj = {
            ...prev,
            myAppointments: appointments.myappointments,
          };
          return newObj;
        });
      })
      .catch((err) => console.log(err));
  };
  return full ? (
    <h2 className="not-available">No Hours Available</h2>
  ) : (
    <div onClick={clickHandler} className="HourBox">
      {hour}
    </div>
  );
};

export default HourBox;
