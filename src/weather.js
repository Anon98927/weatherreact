import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`The weather in ${city} is ${response.data.main.temp}°F`);
  }
  let city = "New York";
  let apiKey = "7e977d5c64e3857ddc3fd8233d003772";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  axios.get(url).then(handleResponse);
  return <h2>Hello from Weather</h2>;
}
