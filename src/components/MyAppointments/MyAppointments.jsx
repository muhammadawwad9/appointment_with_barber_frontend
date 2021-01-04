import React, { useState, useEffect } from "react";
import "./MyAppointments.css";
import { toast } from "react-toastify";
//functions imports
import api from "../api/api";
//components imports
import Title from "../Public/Title";
import Card from "../Public/Card";

//Login component
const MyAppointments = ({ user }) => {
  //states
  const [businesses, setBusinesses] = useState([]);
  console.log("businesses is: ", businesses);

  //functions
  const getBusinessNameById = (id) => {
    if (businesses.length > 0) {
      const name = businesses.filter((business) => business.id == id)[0]
        .businessname;
      return name;
    }
  };
  //useEffect
  useEffect(() => {
    api("getbusiness", {
      method: "GET",
      headers: { token: localStorage.getItem("access_token") },
    })
      .then((businesses) => setBusinesses(businesses))
      .catch((err) => console.error(err));
  }, []);

  {
    return user.myAppointments == null ||
      JSON.parse(user.myAppointments).length === 0 ? (
      <h1 className="msg">You Have No Appointments Yet</h1>
    ) : (
      <div className="MyAppointments">
        {JSON.parse(user.myAppointments).map((appointment, i) => {
          return (
            <Card
              key={i}
              favCard={true}
              businessName={getBusinessNameById(appointment.businessId)}
              date={appointment.date}
              hour={appointment.hour}
            />
          );
        })}
      </div>
    );
  }
};

export default MyAppointments;
