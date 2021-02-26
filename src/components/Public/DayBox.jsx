import React from "react";
import "./DayBox.css";
import { NavLink } from "react-router-dom";

const DayBox = ({ isworking, daynum, businessId, month }) => {
  //functions
  return isworking ? (
    <NavLink
      className="nav-link"
      exact
      to={`/hourspage/${daynum}/${month}/${businessId}`}
    >
      {" "}
      <div className="DayBox blue">{daynum}</div>
    </NavLink>
  ) : (
    <NavLink
      className="nav-link"
      exact
      to={`/hourspage/${daynum}/${month}/${businessId}`}
    >
      <div className="DayBox red">{daynum}</div>
    </NavLink>
  );
};

export default DayBox;
