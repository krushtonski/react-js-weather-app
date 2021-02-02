import React from "react";
import "./Signature.css";

export default function Signature() {
  return (
    <div className="signatures">
      <small>
        <a
          href="https://github.com/krushtonski/SheCodes-Weather-Application"
          target="_blank"
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
        >
          Watering Plants Illustration
        </a>{" "}
        by{" "}
        <a href="https://blush.design/artists/irene-falgueras">
          Irene Falgueras
        </a>
      </small>
    </div>
  );
}
