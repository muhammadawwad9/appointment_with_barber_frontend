import React from "react";
import "./Card.css";
const Card = ({ businessName, location, avg, favCard, date, hour }) => {
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

  {
    return !favCard ? (
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
        <img
          className="favorite-icon empty"
          src="img/emptystar.svg"
          alt=""
          onClick={favToggle}
        />
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
          August/{date}, {hour}
        </h3>
        <img className="delete-icon" src="img/trash.svg" alt="delete" />
        <img className="edit-icon" src="img/edit.svg" alt="edit" />
        <div className="edge"></div>
      </div>
    );
  }
};

export default Card;
