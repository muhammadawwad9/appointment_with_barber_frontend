import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./HoursPage.css";
//functions imports
import api from "../api/api";

//components imports
import HourBox from "../Public/HourBox";

//we will get something like this in the page address: http://localhost:4000/hourspage/:daynum/:month/

const HoursPage = ({ setUser }) => {
  //states
  const [changes, setChanges] = useState(1);
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
  //this function returns the sum of an hour plus minutes
  const addMinutesToHour = (hour, minutes) => {
    let minutesInHour = hour.split(":")[1];
    let onlyHour = hour.split(":")[0];
    //converting the given minutes to hours
    let minutesToHours = parseInt(minutes / 60);
    let remainingMinutes = minutes % 60 > 0 ? minutes % 60 : minutes;
    let finalTime;
    if (minutesToHours >= 1) onlyHour = parseInt(onlyHour) + minutesToHours;

    const minutesSum = parseInt(minutesInHour) + remainingMinutes;
    if (minutesSum >= 60) {
      onlyHour++;
      let finalMinutes = minutesSum - 60;
      finalTime = onlyHour + ":" + String(finalMinutes).padStart(2, "0");
    } else {
      finalTime = onlyHour + ":" + String(minutesSum).padStart(2, "0");
    }
    return finalTime;
  };

  //useEffect (to get the calendar for that business in the given month)
  useEffect(() => {
    api(`calendar/${calendarName}`, {
      headers: { token: localStorage.getItem("access_token") },
    })
      .then((calendar) => {
        const wantedDay = calendar.filter((day) => day.daynum == dayNum)[0];
        const workingHours = JSON.parse(wantedDay.workinghours);
        const appointments = JSON.parse(wantedDay.appointments);
        const diff = wantedDay.diff;
        // const diff = 30;
        const emptyHoursArr = [];
        if (!appointments) {
          for (let i = 0; i < workingHours.length; i++) {
            let start = workingHours[i].start;
            while (
              Date.parse(`01/01/2011 ${start}`) <
              Date.parse(`01/01/2011 ${workingHours[i].end}`)
            ) {
              emptyHoursArr.push(start);

              start = addMinutesToHour(start, diff);
            }
          }
        } else {
          for (let i = 0; i < workingHours.length; i++) {
            let start = workingHours[i].start;
            let ok = true;
            while (
              Date.parse(`01/01/2011 ${start}`) <
              Date.parse(`01/01/2011 ${workingHours[i].end}`)
            ) {
              for (let i = 0; i < appointments.length; i++) {
                if (
                  Date.parse(`01/01/2011 ${appointments[i].hour}`) ==
                  Date.parse(`01/01/2011 ${start}`)
                ) {
                  ok = false;
                }
              }
              if (ok) {
                emptyHoursArr.push(start);
              }
              ok = true;
              start = addMinutesToHour(start, diff);
            }
          }
        }
        setEmptyHoursArr(emptyHoursArr);
      })
      .catch((err) => console.error(err));
  }, [changes]);

  return emptyHoursArr.length == 0 ? (
    <HourBox full={true} />
  ) : (
    <div className="HoursPage">
      <h1 className="date">
        {dayNum}, {month[0].toUpperCase()}
        {month.slice(1)}
      </h1>
      <div className="hours">
        {emptyHoursArr.map((hour, i) => {
          return (
            <HourBox
              setChanges={setChanges}
              setUser={setUser}
              key={uuid()}
              hour={hour}
              calendarName={calendarNameToSend}
              businessId={businessId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HoursPage;
