import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./formattedDate";
import "./WeatherInfo.css";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
  return (
    <div className = "Weatherinfo">
    <div className="overview">
    <h1>{props.data.city}</h1>
    <ul>
      <li className="last-updated">
        <FormattedDate date={props.data.date} />
      </li>
      <div className="text-capitalize"><li className="overview-description">{props.data.description}</li></div>
    </ul>
  </div>
  <div className="row">
    <div className="col-md-2 col-sm-6">
      <div className="clearfix weather-temperature">
       <div className="float-left">
        <WeatherIcon code ={props.data.icon}/>
        </div>
    <div className="col-md-2 col-sm-6">
        <div className="float-left">
        <WeatherTemperature celsius={props.data.temperature} />
        </div>
    </div>
      </div>
    </div>
  </div>
    <div className="row">
    <ul>
      <li className="extra-weather-info">
        <li>Feels like: <span>{Math.round(props.data.feelsLike)}</span> ºC</li>
        <li>Humidity: {props.data.humidity}% <span className="divider">|</span> Wind: {Math.round(props.data.wind)} km/h</li>
      </li>
    </ul>
  </div>
</div>
  );
}
