import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast (props){
    function formatDate (){
        let date = new Date(props.data.dt * 1000);
        let weekDays = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`];
        let weekDay = weekDays[date.getDay()];
    return `${weekDay}`;
  }
    function temperature(){
        let temperature = Math.round(props.data.main.temp);
        return `${temperature}°C`;
}

    return (
     <div className="DailyForescast col">
       {formatDate()}
       <WeatherIcon code={props.data.weather[0].icon}/>
       {temperature()}
      </div>
    );
}