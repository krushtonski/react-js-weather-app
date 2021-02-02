import './App.css';
import React from "react";
import Weather from "./Weather";
import Projections from "./Projections";
import Signature from "./Signature";

function App() {
  return (
    <div className="App">
       <h1>Weather Forecast App</h1>
      <Weather />
      <Projections />
      <img src="/images/lady.png" className="gardening" alt="lady" />
      <Signature />
    </div>
  );
}

export default App;
