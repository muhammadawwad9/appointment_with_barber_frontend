import React, { useState, useEffect } from "react";
import "./mybusinesses.css";
//components imports
import Inputs from "../Public/Inputs";
import MyBusinessCard from "../Public/MyBusinessCard";
import api from "../api/api";
import Title from "../Public/Title";

const MyBusinesses = () => {
  //states
  const [businesses, setBusinesses] = useState([]);
  //useEffect
  useEffect(() => {
    api(`getbusinessbyownerid/`, {
      headers: { token: localStorage.getItem("access_token") },
      method: "GET",
    })
      .then((resbusinesses) => {
        console.log(resbusinesses);
        setBusinesses(resbusinesses);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="Businesses">
      <Title title="My businesses" />
      <div className="businesses-list">
        {businesses.map((business, i) => {
          return (
            <MyBusinessCard
              key={i}
              id={business.id}
              businessName={business.businessname}
              location={business.geolocation}
              avg="3.5"
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyBusinesses;
