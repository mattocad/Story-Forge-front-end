import React, { useState } from "react";
import "./ModeSelectionScreen.css";
import storyImage from "../assets/story.png"; // Image for Story Mode
import forgeImage from "../assets/anvil.png"; // Image for Forge Mode

const ModeSelectionScreen = ({ onContinue }) => {
  const [mode, setMode] = useState("story"); // default low temperature

  const toggleMode = () => {
    setMode((prev) => (prev === "story" ? "forge" : "story"));
  };

  return (
    <div className="mode-selection-screen">
      <h1>Select Game Mode</h1>
      <p className="mode">
        Current Mode: {mode === "story" ? "Story Mode" : "Forge Mode"}
      </p>
      <div className="mode-image">
        {mode === "story" ? (
          <img src={storyImage} alt="Story Mode" />
        ) : (
          <img src={forgeImage} alt="Forge Mode" />
        )}
      </div>
      <p className="mode-description">
        {mode === "story"
          ? "Experience a carefully crafted narrative where the story unfolds as written. In this mode, you'll follow the base storyline with only subtle deviations, ensuring a guided journey through the Mutiny on the Bounty."
          : "Experience a more dynamic adventure with greater narrative freedom. In this mode, expect a more unpredictable storyline where your choices significantly influence the plot’s direction, inviting you to shape the story in new and unexpected ways."}
      </p>
      <div className="button-group">
        <button onClick={toggleMode}>Switch Mode</button>
        <button onClick={() => onContinue(mode)}>Continue</button>
      </div>
    </div>
  );
};

export default ModeSelectionScreen;
