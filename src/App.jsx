import React, { useState } from "react";
import TitleScreen from "./components/TitleScreen";
import ModeSelectionScreen from "./components/ModeSelectionScreen";
import PrefaceScreen from "./components/PrefaceScreen";
import GameScreen from "./components/GameScreen";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("title");
  const [mode, setMode] = useState("story"); // default mode

  const handleStart = () => {
    setScreen("mode");
  };

  const handleExit = () => {
    // For web apps, you might simply alert and/or close the window if permitted
    alert("Thank you for playing!");
    window.close();
  };

  const handleModeContinue = (selectedMode) => {
    setMode(selectedMode);
    setScreen("preface");
  };

  const handlePrefaceContinue = () => {
    setScreen("game");
  };

  return (
    <div className="app-container">
      {screen === "title" && (
        <TitleScreen onStart={handleStart} onExit={handleExit} />
      )}
      {screen === "mode" && (
        <ModeSelectionScreen onContinue={handleModeContinue} />
      )}
      {screen === "preface" && (
        <PrefaceScreen onContinue={handlePrefaceContinue} />
      )}
      {screen === "game" && <GameScreen mode={mode} />}
    </div>
  );
}

export default App;
