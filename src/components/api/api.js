import React from "react";

const api = (url, options) => {
  const server = `http://localhost:4000/`;
  const heroku = "https://barber-appointment-backend.herokuapp.com/";

  return fetch(`${server}${url}`, {
    ...options,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.error(err));
};

export default api;
