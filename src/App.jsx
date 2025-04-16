import React, { useState } from "react";
import TitleScreen from "./components/TitleScreen";
import ModeSelectionScreen from "./components/ModeSelectionScreen";
import PrefaceScreen from "./components/PrefaceScreen";
import GameScreen from "./components/GameScreen";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("title");
  const [mode, setMode] = useState("story"); // default mode
  const [restartKey, setRestartKey] = useState(0); // key to force remount of GameScreen
  const [narrative, setNarrative] = useState(""); // store the transcript

  const handleStart = () => {
    setScreen("mode");
  };

  const handleExit = () => {
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

  // Button 5: Restart – clear transcript and force GameScreen to remount
  const handleRestart = () => {
    setNarrative(""); // Clear the transcript
    setRestartKey((prev) => prev + 1); // Remount GameScreen to reinitialize the session
  };

  // Button 6: Undo – handled in RightContainer via the /undo endpoint,
  // so we define a no-op here.
  const handleUndo = () => {
    // Undo is handled inside RightContainer.
  };

  // Button 7: Settings – return to mode selection screen so the user can change the mode
  const handleSettings = () => {
    setScreen("mode");
  };

  // Button 8: Export – download the current transcript as a text file
  const handleExport = (transcript) => {
    const blob = new Blob([transcript], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "chat_transcript.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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
      {screen === "game" && (
        <GameScreen
          key={restartKey} // forces remount on restart
          mode={mode}
          narrative={narrative}
          setNarrative={setNarrative}
          onRestart={handleRestart}
          onUndo={handleUndo}
          onSettings={handleSettings}
          onExport={handleExport}
        />
      )}
    </div>
  );
}

export default App;
