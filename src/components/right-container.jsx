import React from "react";
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
  onUndo,
  onSettings,
  onExport,
  narrative,
}) => {
  // For options 1-4, send commands to your back end as before
  const sendCommand = async (option) => {
    setIsLoading(true); // Turn on loading overlay
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
    setIsLoading(false); // Turn off loading overlay
  };

  return (
    <div className="right-container">
      <img src={sampleImage} alt="HMS Bounty" className="image" />
      <div className="button-container">
        <CustomButton
          imageSrc={button1}
          altText="Option 1"
          onClick={() => sendCommand(1)}
        />
        <CustomButton
          imageSrc={button2}
          altText="Option 2"
          onClick={() => sendCommand(2)}
        />
        <CustomButton
          imageSrc={button3}
          altText="Option 3"
          onClick={() => sendCommand(3)}
        />
        <CustomButton
          imageSrc={button4}
          altText="Option 4"
          onClick={() => sendCommand(4)}
        />
        {/* Button 5: Restart */}
        <CustomButton
          imageSrc={button5}
          altText="Restart"
          onClick={onRestart}
        />
        {/* Button 6: Undo */}
        <CustomButton imageSrc={button6} altText="Undo" onClick={onUndo} />
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
