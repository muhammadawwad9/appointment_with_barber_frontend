import React, { useEffect, useState } from "react";
import "./BusinessPage.css";
//functions imports
import api from "../api/api";

//components imports
import Card from "../Public/Card";
import Title from "../Public/Title";
import { NavLink } from "react-router-dom";
const BusinessPage = ({ user, setUser }) => {
  let businessId = window.location.pathname.split("/")[2];
  //businesspage/:id
  //states
  const [business, setBusiness] = useState(null);

  //functions
  const favToggle = (e) => {
    if (e.target.classList.contains("empty")) {
      e.target.src = "/img/filledstar.svg";
      e.target.classList.remove("empty");
      api("favorites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify({
          businessId: String(businessId),
        }),
      })
        .then((favorites) => {
          // console.log("PARSED RESPONSEEEE AFTER Add: ", favorites);
          let userObj = JSON.parse(localStorage.getItem("userObj"));
          userObj.myFavorites = favorites.myfavorites;
          localStorage.setItem("userObj", JSON.stringify(userObj));
          setUser(userObj);
        })
        .catch((err) => console.error(err));
    } else {
      e.target.src = "/img/emptystar.svg";
      e.target.classList.add("empty");
      api("favorites", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify({
          businessId: String(businessId),
        }),
      })
        .then((favorites) => {
          // console.log("PARSED RESPONSEEEE AFTER DELETE: ", favorites);
          let userObj = JSON.parse(localStorage.getItem("userObj"));
          userObj.myFavorites = favorites.myfavorites;
          localStorage.setItem("userObj", JSON.stringify(userObj));
          setUser(userObj);
        })
        .catch((err) => console.error(err));
    }
  };

  //useEffect
  useEffect(() => {
    api(`business/${businessId}`, {
      headers: { token: localStorage.getItem("access_token") },
    })
      .then((business) => {
        //   console.log("the business issssssssssssssssssss: ", business);
        setBusiness(business);
      })
      .catch((err) => console.error(err));
  }, []);

  // console.log("BUSINESS STAAATE: ", business);
  {
    return business == null ? (
      <img
        src="https://media2.giphy.com/media/1dH0xIDSToAtZYwf8D/giphy.gif"
        className="scissors"
      />
    ) : (
      <div className="BusinessPage">
        <NavLink exact to="/hourspage/1/august/2">
          <h3 className="just-for-testing">
            go to HoursPage component (testing)
          </h3>
        </NavLink>
        <Title title={business.businessObj.businessname} />
        {user.myFavorites.indexOf(String(businessId)) == -1 ? (
          <img
            className="favorite-icon empty"
            src="/img/emptystar.svg"
            alt=""
            onClick={favToggle}
          />
        ) : (
          <img
            className="favorite-icon "
            src="/img/filledstar.svg"
            alt=""
            onClick={favToggle}
          />
        )}
        <Card
          id={business.businessObj.id}
          bsCard={true}
          businessName={business.businessObj.businessname}
          ownerFirstName={business.firstname}
          ownerLastName={business.lastname}
          geolocation={business.businessObj.geolocation}
          businessAddress={business.businessObj.businessaddress}
          phone={business.phone}
          setUser={setUser}
        />
      </div>
    );
  }
};

export default BusinessPage;
