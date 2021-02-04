import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
       <h1>Weather Forecast App</h1>
      <Weather defaultCity="Berlin"/>
     <footer>
 <div className="signatures">
      <small>
        <a
          href="https://github.com/krushtonski/SheCodes-Weather-Application"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by <a href="katerushton.me">Kate Rushton</a>
      </small>
      <div className="break" />
      <small>
        <a
          href="https://blush.design/collections/cool-kids/scene-watering-plants/OYvKVU_Qt"
          target="_blank"
          rel="noreferrer"
        >
          Watering Plants Illustration
        </a>{" "}
        by{" "}
        <a href="https://blush.design/artists/irene-falgueras">
          Irene Falgueras
        </a>
      </small>
    </div>
     </footer>
     </div>
    </div>
  );
}

export default App;
