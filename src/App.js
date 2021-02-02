import './App.css';
import React from "react";
import Weather from "./Weather";
import Projections from "./Projections";
import Signature from "./Signature";
import Image from "../public/images/lady.png";

function App() {
  return (
    <div className="App">
       <h1>Weather Forecast App</h1>
      <Weather />
      <img src={Image} className="gardening" />
      <Projections/>
      <Signature/>
    </div>
  );
}

export default App;
