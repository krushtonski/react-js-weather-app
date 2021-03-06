import React, { useState } from "react";
import axios from "axios";
import Image from "./Images/lady.png";
import WeatherInfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast"
import "./Weather.css";
import "./App.css";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

// Defining data used 
   function handleResponse(response) {
    setWeatherData({
      ready: true,
      forecast: response.data,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      feelsLike: response.data.main.feels_like,
      city: response.data.name,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon
    });
  }
   function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
// Using OpenWeather Api to get weather info for searched city
  function search() {
    const apiKey = "8292f4b5d4720ad564b1e69cd14e57f1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  // Using the OpenWeather API to find weather where you are now
    function findCoordinates(position) {
    const apiKey = "8292f4b5d4720ad564b1e69cd14e57f1";
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let geoApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(geoApiUrl).then(handleResponse);
  }

  function handleGeoLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(findCoordinates);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
      <div className="container">
        <form className="mb-3" onSubmit={handleSubmit}>
            <div className="row">
            <div className="col-12 col-md-8">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control"
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-9 col-md-3">
              <input
                type="submit"
                value="SEARCH"
                className="btn btn-primary w-100 search-button"
              />
            </div>
         <div className="col-1 col-md-1">
          <button
            type="click"
            className="btn btn-primary findMe-button"
            onClick={handleGeoLocation}
          >
          <div className="locationMarker"><i className="fas fa-map-marker-alt"></i></div>
          </button>
          </div>
         </div>
        </form>
        <WeatherInfo data={weatherData} />
        <img src={Image} className="gardening" alt="lady" />
        <hr />
        <h2>6-day Weather Forecast</h2>
        <WeatherForecast lat={weatherData.lat} lon={weatherData.lon} />
      </div>
      </div>

    );
  } else {
    search();
    return "Loading...";
  }
}

