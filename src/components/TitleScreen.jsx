import React from "react";
import "./TitleScreen.css";
import book from "../assets/story.png";

const TitleScreen = ({ onStart, onExit }) => {
  return (
    <div className="title-screen">
      <h1>Story Forge</h1>
      <img src={book} alt="HMS Bounty" className="image" />
      <h2>Transforming Stories Using Local Large Language Models</h2>
      <div className="button-group">
        <button onClick={onStart}>Start</button>
        <button onClick={onExit}>Exit</button>
      </div>
      <h3>Matthew Nazarian | DFX 2025</h3>
    </div>
  );
};

export default TitleScreen;
