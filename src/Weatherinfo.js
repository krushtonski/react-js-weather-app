import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
  return (
    <div className = "Weatherinfo">
    <div className="overview">
    <h2>{props.data.city}</h2>
    <ul>
      <li className="last-updated">
        <FormattedDate date={props.data.date} />
      </li>
      <li className="overview-description">{props.data.description}</li>
    </ul>
  </div>
  <div className="row">
    <div className="col-6">
      <div className="clearfix weather-temperature">
       <div className="float-left">
        <WeatherIcon code ={props.data.icon}/>
        </div>
        <div className="float-left">
        <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
    </div>
  </div>
  <div className="float-left">
    <ul>
      <li className="extra-weather-info">
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {Math.round(props.data.wind)} km/h</li>
      </li>
    </ul>
  </div>
</div>
  );
}
