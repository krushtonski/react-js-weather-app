import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props){
  function formatDay() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayIndex = new Date(props.data.dt * 1000).getDay();
    let day = days[dayIndex];
    return day
  }

   function temperature(){
        let temperature = Math.round(props.data.temp.day);
        return `${temperature}°C`;
}
    return (
     <div className="WeatherForecastPrev col">
       {formatDay()}
       <WeatherIcon code={props.data.weather[0].icon}/>
       {temperature()}
      </div>
    );
}