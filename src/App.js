import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [firstDieResult, setFirstDieResult] = useState(1);
  const [secondDieResult, setSecondDieResult] = useState(6);

  const firstDieImage = require(`./assets/${firstDieResult}.png`);
  const secondDieImage = require(`./assets/${secondDieResult}.png`);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex", margin: 20 }}>
          <img src={firstDieImage} className="die" alt="Die one" />
          <img src={secondDieImage} className="die" alt="Die two" />
        </div>
        <span>firstDieResult + secondDieResult</span>
        <button
          className="button"
          onClick={() => {
            setFirstDieResult(Math.floor(Math.random() * 1000) % 7);
            setSecondDieResult(Math.floor(Math.random() * 1000) % 7);
          }}
        >
          Roll
        </button>
      </header>
    </div>
  );
}
