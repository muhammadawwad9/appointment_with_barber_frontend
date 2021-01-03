import React, { useState, useEffect } from "react";
import "./Businesses.css";
//components imports
import Inputs from "../Public/Inputs";
import Card from "../Public/Card";
import api from "../api/api";

const Businesses = (props) => {
  //states
  const [businesses, setBusinesses] = useState([]);
  const [insertedWord, setInsertedWord] = useState("");
  //useEffect
  useEffect(() => {
    api("getbusiness", {
      headers: { token: localStorage.getItem("access_token") },
      method: "GET",
    })
      .then((businesses) => {
        setBusinesses(businesses);
      })
      .catch((err) => console.error(err));
  }, [insertedWord]);

  //functions
  const onChangeHandler = (e) => {
    setInsertedWord(e.target.value);
  };

  return (
    <div className="Businesses">
      <Inputs
        icon="img/search.svg"
        type="text"
        id="search-input"
        name="search-input"
        placeholder="Search a barber..."
        onChangeFunc={onChangeHandler}
      />
      <h2>Barber shops available:</h2>
      <div className="businesses-list">
        {businesses.map((business, i) => {
          return (
            <Card
              key={i}
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

export default Businesses;
