import React, {useState} from "react";
import WeatherForecastPreview from "./WeatherForecastPreview";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props){
    const[loaded, setLoaded] = useState(false);
    const[forecastData, setForecastData] = useState({ready: false});

function handleForecastResponse(response){
     setForecastData(response.data);
     setLoaded(true);
    }

function getForecast(){
    let apiKey = "8292f4b5d4720ad564b1e69cd14e57f1"
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`
    axios.get(url).then(handleForecastResponse);
}

if (loaded && props.lat === forecastData.lat){
return (
   <div className = "row">
    <div className="WeatherForecast row">
      <div  className="col-sm-12 col-md-3"><WeatherForecastPreview data={forecastData.daily[0]} /></div>
      <div className="col-sm-12 col-md-3"><WeatherForecastPreview data={forecastData.daily[1]} /></div>
      <div className="col-sm-12 col-md-3"><WeatherForecastPreview data={forecastData.daily[2]} /></div>
      <div className="col-sm-12 col-md-3"><WeatherForecastPreview data={forecastData.daily[3]} /></div>
    </div>
    </div>
);
} else {
  getForecast()
  return "Loading forecast..."
  }
}

