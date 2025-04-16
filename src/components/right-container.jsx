import React, { useState } from "react";
import sampleImage from "../assets/hms-bounty.png";
import CustomButton from "./CustomButton";

// Import images for each button
import button1 from "../assets/buttons/button1.png";
import button2 from "../assets/buttons/button2.png";
import button3 from "../assets/buttons/button3.png";
import button4 from "../assets/buttons/button4.png";
import button5 from "../assets/buttons/redo-button.png"; // Restart
import button6 from "../assets/buttons/undo-button.png"; // Undo
import button7 from "../assets/buttons/settings-button.png"; // Settings
import button8 from "../assets/buttons/export-button.png"; // Export

const RightContainer = ({
  onNarrativeUpdate,
  setIsLoading,
  onRestart,
  onSettings,
  onExport,
  narrative,
}) => {
  // Function to handle option button clicks
  const handleOptionClick = async (option) => {
    // Append player's choice to transcript.
    // This will mark the turn with "PLAYER:" so that LeftContainer can style it (e.g., in red).
    onNarrativeUpdate(`PLAYER: Option ${option}`, false);
    setIsLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/command", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ option }),
      });
      const data = await response.json();
      onNarrativeUpdate(data.narrative);
    } catch (error) {
      console.error("Error sending command:", error);
    }
    setIsLoading(false);
  };

  // New Undo handler that calls the backend /undo endpoint
  const handleUndo = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/undo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      // Replace the current narrative with the updated transcript
      onNarrativeUpdate(data.narrative, true);
    } catch (error) {
      console.error("Error undoing turn:", error);
    }
    setIsLoading(false);
  };

  return (
    <div className="right-container">
      <img src={sampleImage} alt="HMS Bounty" className="image" />
      <div className="button-container">
        <CustomButton
          imageSrc={button1}
          altText="Option 1"
          onClick={() => handleOptionClick(1)}
        />
        <CustomButton
          imageSrc={button2}
          altText="Option 2"
          onClick={() => handleOptionClick(2)}
        />
        <CustomButton
          imageSrc={button3}
          altText="Option 3"
          onClick={() => handleOptionClick(3)}
        />
        <CustomButton
          imageSrc={button4}
          altText="Option 4"
          onClick={() => handleOptionClick(4)}
        />
        {/* Button 5: Restart */}
        <CustomButton
          imageSrc={button5}
          altText="Restart"
          onClick={onRestart}
        />
        {/* Button 6: Undo */}
        <CustomButton imageSrc={button6} altText="Undo" onClick={handleUndo} />
        {/* Button 7: Settings */}
        <CustomButton
          imageSrc={button7}
          altText="Settings"
          onClick={onSettings}
        />
        {/* Button 8: Export */}
        <CustomButton
          imageSrc={button8}
          altText="Export"
          onClick={() => onExport(narrative)}
        />
      </div>
    </div>
  );
};

export default RightContainer;
