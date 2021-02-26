import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./HoursPageBus.css";
//functions imports
import api from "../api/api";

//components imports
import HourBox from "../Public/HourBox";
import Client from "../Client/Client";
//we will get something like this in the page address: http://localhost:4000/hourspage/:daynum/:month/

const HoursPageBus = () => {
  //states
  const [emptyHoursArr, setEmptyHoursArr] = useState([]);
  const dayNum = window.location.pathname.split("/")[2];
  const month = window.location.pathname.split("/")[3];
  const businessId = window.location.pathname.split("/")[4];
  const calendarName = month + "_" + businessId;
  const calendarNameToSend =
    month +
    "/" +
    dayNum; /*here is the error, we were sending +businessID and not +dayNum (in line 18)*/

  //functions

  //useEffect (to get the calendar for that business in the given month)
  useEffect(() => {
    api(`calendar/${calendarName}`, {
      headers: { token: localStorage.getItem("access_token") },
    })
      .then((calendar) => {
        const wantedDay = calendar.filter((day) => day.daynum == dayNum)[0];
        const workingHours = JSON.parse(wantedDay.workinghours);
        const appointments = JSON.parse(wantedDay.appointments);
        let appointmentsArr = [];
        if (appointments) {
          setEmptyHoursArr(appointments);
        } else {
          setEmptyHoursArr([]);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1 className="date">
        {dayNum}, {month[0].toUpperCase()}
        {month.slice(1)}
      </h1>
      {!emptyHoursArr || emptyHoursArr.length == 0 ? (
        <h2 className="message">No Appointments</h2>
      ) : (
        <div className="cards">
          {emptyHoursArr.map((appointment, i) => {
            return (
              <Client key={i} hour={appointment.hour} id={appointment.userid} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HoursPageBus;
