import React from "react";
import "./DayBox.css";
import { NavLink } from "react-router-dom";

const DayBoxBus = ({ isworking, daynum, businessId, month }) => {
  //functions

  return isworking ? (
    <NavLink exact to={`/hourspagebus/${daynum}/${month}/${businessId}`}>
      {" "}
      <div className="DayBox blue">{daynum}</div>
    </NavLink>
  ) : (
    <div className="DayBox red">{daynum}</div>
  );
};

export default DayBoxBus;
