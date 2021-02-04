import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherForecastPreview from "./WeatherForecastPreview";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props){
    const[loaded, setLoaded] = useState(false);
    const[forecast, setForecast] = useState(null);

    function handleForecastResponse(response){
     setForecast(response.data);
     setLoaded(true);
    }
if (loaded && props.city === forecast.city.name){
return (
    <div className="WeatherForecast row">
    {forecast.list.slice(0,5).map(function(forecastItem) {
     return <WeatherForecastPreview data={forecastItem}/>;
    })}
    </div>
);
} else {
    let apiKey = "8292f4b5d4720ad564b1e69cd14e57f1";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
    return null;
  }
}
