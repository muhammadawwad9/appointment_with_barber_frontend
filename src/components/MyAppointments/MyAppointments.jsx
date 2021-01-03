import React, { useState } from "react";
import { toast } from "react-toastify";
//functions imports
import api from "../api/api";
//components imports
import Title from "../Public/Title";
import Buttons from "../Public/Buttons";
import Inputs from "../Public/Inputs";

//Login component
const MyAppointments = ({ setIsLoggedIn, setUser }) => {
  return (
    <div className="MyAppointments">
      <h1>MyAppointments component</h1>
    </div>
  );
};

export default MyAppointments;
