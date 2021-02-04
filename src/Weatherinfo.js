import React from "react";
import Weathericon from "./Weathericon";
import FormattedDate from "./formattedDate";

export default function Weatherinfo(props){
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
        <Weathericon code ={props.data.icon}/>
        </div>
        <div className="float-left">
          <strong>{Math.round(props.data.temperature)}</strong>
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
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {Math.round(props.data.wind)} km/h</li>
      </li>
    </ul>
  </div>
</div>
  );
}
