// import React, { useEffect, useState } from "react";
// import LeftContainer from "./left-container";
// import RightContainer from "./right-container";

// const GameScreen = ({ mode, onRestart, onUndo, onSettings, onExport }) => {
//   const [narrative, setNarrative] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const startGame = async () => {
//       setIsLoading(true);
//       try {
//         const response = await fetch("http://127.0.0.1:8000/start", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ mode }),
//         });
//         const data = await response.json();
//         setNarrative(data.narrative);
//       } catch (error) {
//         console.error("Error starting game:", error);
//       }
//       setIsLoading(false);
//     };
//     startGame();
//   }, [mode]);

//   // Update updateNarrative to accept a replace flag:
//   const updateNarrative = (newText, replace = false) => {
//     if (replace) {
//       setNarrative(newText);
//     } else {
//       setNarrative((prev) => prev + "\n\n" + newText);
//     }
//   };

//   return (
//     <>
//       <LeftContainer narrative={narrative} isLoading={isLoading} />
//       <RightContainer
//         onNarrativeUpdate={updateNarrative}
//         setIsLoading={setIsLoading}
//         onRestart={onRestart}
//         onUndo={onUndo}
//         onSettings={onSettings}
//         onExport={onExport}
//         narrative={narrative}
//       />
//     </>
//   );
// };

// export default GameScreen;

import React, { useEffect, useState } from "react";
import LeftContainer from "./left-container";
import RightContainer from "./right-container";

const GameScreen = ({ mode, onRestart, onUndo, onSettings, onExport }) => {
  const [narrative, setNarrative] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const startGame = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://127.0.0.1:8000/start", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mode }),
        });
        const data = await response.json();
        setNarrative(data.narrative);
      } catch (error) {
        console.error("Error starting game:", error);
      }
      setIsLoading(false);
    };
    startGame();
  }, [mode]);

  // Updated updateNarrative function accepts an optional third parameter (e.g., marker)
  const updateNarrative = (newText, replace = false, marker = null) => {
    if (replace) {
      setNarrative(newText);
    } else {
      setNarrative((prev) => prev + "\n\n" + newText);
    }
  };

  return (
    <>
      <LeftContainer narrative={narrative} isLoading={isLoading} />
      <RightContainer
        onNarrativeUpdate={updateNarrative}
        setIsLoading={setIsLoading}
        onRestart={onRestart}
        onUndo={onUndo}
        onSettings={onSettings}
        onExport={onExport}
        narrative={narrative}
      />
    </>
  );
};

export default GameScreen;
