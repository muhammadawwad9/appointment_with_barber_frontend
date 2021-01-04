import React, { useState, useEffect } from "react";
import "./Businesses.css";
//components imports
import Inputs from "../Public/Inputs";
import Card from "../Public/Card";

const Businesses = (props) => {
  const localServer = `http://localhost:4000/`;
  //states
  const [businesses, setBusinesses] = useState([]);
  const [insertedWord, setInsertedWord] = useState("");
  //useEffect
  useEffect(() => {
    fetch(`${localServer}getbusiness/${insertedWord}`)
      .then((response) => response.json())
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
        {businesses.map((business) => {
          return (
            <Card
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
