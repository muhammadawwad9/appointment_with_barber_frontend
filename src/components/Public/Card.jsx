import React, { useState } from "react";
import "./Card.css";
//functions imports
import api from "../api/api";
const Card = ({
  businessName,
  location,
  avg,
  apCard,
  month,
  day,
  hour,
  id,
  user,
  setUser,
}) => {
  //states
  //fuctions
  const favToggle = (e) => {
    if (e.target.classList.contains("empty")) {
      e.target.src = "img/filledstar.svg";
      e.target.classList.remove("empty");
    } else {
      e.target.src = "img/emptystar.svg";
      e.target.classList.add("empty");
    }
  };

  const deleteAppointment = () => {
    let userObjTest = JSON.parse(localStorage.getItem("userObj"));
    console.log("after TEEEEEEST from local storage(parsed): ", userObjTest);
    api("appointment", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify({
        day: month + "/" + day,
        hour: hour,
        businessId: id,
      }),
    })
      .then((appointments) => {
        // console.log("PARSED RESPOOOONSE: ", appointments);
        let userObj = JSON.parse(localStorage.getItem("userObj"));
        // console.log("after extracting from local storage(parsed): ", userObj);
        userObj.myAppointments = appointments.myappointments;

        // console.log("after updating from local storage(parsed): ", userObj);
        // console.log("stringified: ", JSON.stringify(userObj));
        localStorage.setItem("userObj", JSON.stringify(userObj));
        setUser(userObj);
      })
      .catch((err) => console.error(err));
  };

  {
    return !apCard ? (
      <div className="card">
        <img
          className="profile-pic"
          src="https://images-na.ssl-images-amazon.com/images/I/51bBDD%2BRa1L._AC_SX355_.jpg"
          alt=""
        />
        <h3 className="business-name">{businessName}</h3>
        <img className="location-icon" src="img/location.svg" />
        <h3 className="location">{location}</h3>
        <h3 className="avg">{avg}/5</h3>
        {user.myFavorites.indexOf(String(id)) == -1 ? (
          <img
            className="favorite-icon empty"
            src="img/emptystar.svg"
            alt=""
            onClick={favToggle}
          />
        ) : (
          <img
            className="favorite-icon "
            src="img/filledstar.svg"
            alt=""
            onClick={favToggle}
          />
        )}

        <div className="edge"></div>
      </div>
    ) : (
      <div className="fav-card">
        <img
          className="profile-pic"
          src="https://images-na.ssl-images-amazon.com/images/I/51bBDD%2BRa1L._AC_SX355_.jpg"
          alt="profile picture"
        />
        <h3 className="business-name-fav">{businessName}</h3>
        <h3 className="time">
          {month[0].toUpperCase() + month.slice(1, 3)}, {day}, {hour}
        </h3>
        <img
          className="delete-icon"
          src="img/trash.svg"
          alt="delete"
          onClick={deleteAppointment}
        />
        <img className="edit-icon" src="img/edit.svg" alt="edit" />
        <div className="edge"></div>
      </div>
    );
  }
};

export default Card;
