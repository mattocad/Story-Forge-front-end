import React from "react";
import sampleImage from "../assets/hms-bounty.png";
import CustomButton from "./CustomButton";

// Import images for each button
import button1 from "../assets/buttons/button1.png";
import button2 from "../assets/buttons/button2.png";
import button3 from "../assets/buttons/button3.png";
import button4 from "../assets/buttons/button4.png";
import button5 from "../assets/buttons/redo-button.png";
import button6 from "../assets/buttons/undo-button.png";
import button7 from "../assets/buttons/settings-button.png";
import button8 from "../assets/buttons/export-button.png";

const RightContainer = ({ onNarrativeUpdate }) => {
  // Function to send a command to the FastAPI back end
  const sendCommand = async (option) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/command", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ option }),
      });
      const data = await response.json();
      // Update the narrative using the callback passed from App.jsx
      onNarrativeUpdate(data.narrative);
    } catch (error) {
      console.error("Error sending command:", error);
    }
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
        <CustomButton
          imageSrc={button5}
          altText="Redo"
          onClick={() => sendCommand(5)}
        />
        <CustomButton
          imageSrc={button6}
          altText="Undo"
          onClick={() => sendCommand(6)}
        />
        <CustomButton
          imageSrc={button7}
          altText="Settings"
          onClick={() => sendCommand(7)}
        />
        <CustomButton
          imageSrc={button8}
          altText="Export"
          onClick={() => sendCommand(8)}
        />
      </div>
    </div>
  );
};

export default RightContainer;
