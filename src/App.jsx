import React, { useEffect, useState } from "react";
import LeftContainer from "./components/left-container";
import RightContainer from "./components/right-container";
import "./App.css";

function App() {
  const [narrative, setNarrative] = useState("");

  useEffect(() => {
    // Start the game on app load by calling the /start endpoint
    const startGame = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/start", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        setNarrative(data.narrative);
      } catch (error) {
        console.error("Error starting game:", error);
      }
    };
    startGame();
  }, []);

  // Function to append new narrative text when a command is processed
  const updateNarrative = (newText) => {
    setNarrative((prev) => prev + "\n\n" + newText);
  };

  return (
    <div className="app-container">
      <LeftContainer narrative={narrative} />
      <RightContainer onNarrativeUpdate={updateNarrative} />
    </div>
  );
}

export default App;
