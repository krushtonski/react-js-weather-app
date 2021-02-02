import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    function handleResponse(response){
      console.log(response.data);
    }
  const apiKey = "8292f4b5d4720ad564b1e69cd14e57f1";
  let city = " London";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);

  let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    precipitation: 12,
    humidity: 80,
    wind: 10
  };

  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              autoComplete="off"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="SEARCH"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h2>{weatherData.city}</h2>
        <ul>
          <li className="last-updated">Last updated: {weatherData.date}</li>
          <li className="overview-description">{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="float-left">
        <ul>
          <li className="extra-weather-info">
            <li>Precipitation: {weatherData.precipitation}%</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </li>
        </ul>
      </div>
    </div>
  );
}
