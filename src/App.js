import './App.css';
import React from "react";
import Weather from "./Weather";
import Projections from "./Projections";
import Signature from "./Signature";

function App() {
  return (
    <div className="App">
       <h1>Weather Forecast App</h1>
      <Weather defaultCity="Berlin"/>
       <img src="/images/lady.png" className="gardening" alt="lady"/>
      <Projections />
      <Signature />
    </div>
  );
}

export default App;
