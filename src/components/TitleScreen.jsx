import React from "react";
import "./TitleScreen.css";
import sampleImage from "../assets/hms-bounty.png";

const TitleScreen = ({ onStart, onExit }) => {
  return (
    <div className="title-screen">
      <h1>The Mutiny of H.M.S. Bounty</h1>
      <img src={sampleImage} alt="HMS Bounty" className="image" />
      <h2>An Interactive Story Forge Adventure</h2>
      <div className="button-group">
        <button onClick={onStart}>Start</button>
        <button onClick={onExit}>Exit</button>
      </div>
      <h3>Matthew Nazarian | DFX 2025</h3>
    </div>
  );
};

export default TitleScreen;
