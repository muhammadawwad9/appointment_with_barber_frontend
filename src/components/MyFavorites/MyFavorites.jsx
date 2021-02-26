import React, { useState, useEffect } from "react";
import "./MyFavorites.css";
import { toast } from "react-toastify";
//functions imports
import api from "../api/api";
//components imports
import Title from "../Public/Title";
import Card from "../Public/Card";

//Login component
const MyFavorites = ({ user, setUser }) => {
  const [businesses, setBusinesses] = useState([]);

  //functions
  const getBusinessById = (id) => {
    if (businesses.length > 0) {
      const business = businesses.filter((business) => business.id == id)[0];
      return business;
    }
    return {};
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
    return user.myFavorites == null ||
      JSON.parse(user.myFavorites).length === 0 ? (
      <div className="myFavorites">
        <Title title="Favorites" />
        <h1 className="msg">You Have No Favorites Yet</h1>
      </div>
    ) : (
      <div className="MyFavorites">
        <Title title="Favorites" />
        {JSON.parse(user.myFavorites).map((favorite, i) => {
          return (
            <Card
              key={favorite}
              id={favorite}
              businessName={getBusinessById(favorite).businessname}
              location={getBusinessById(favorite).geolocation}
              avg={4.7}
              setUser={setUser}
              user={user}
            />
          );
        })}
      </div>
    );
  }
};
export default MyFavorites;
