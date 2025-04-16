import React, { useEffect, useRef } from "react";
import "./left-container.css";
import spinner from "../assets/spinner.png";

const LeftContainer = ({ narrative, isLoading }) => {
  const containerRef = useRef(null);
  const lastTurnRef = useRef(null);

  useEffect(() => {
    if (lastTurnRef.current) {
      // Scroll the last turn into view so that its top is aligned with the container's top.
      lastTurnRef.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  }, [narrative]);

  // Split the narrative into turns using double newlines as the delimiter.
  const turns = narrative.split("\n\n").filter((turn) => turn.trim() !== "");

  return (
    <div className="left-container-wrapper">
      <div className="left-container" ref={containerRef}>
        {turns.map((turn, index) => {
          const isLast = index === turns.length - 1;
          return (
            <p
              key={index}
              ref={isLast ? lastTurnRef : null}
              className={turn.startsWith("PLAYER:") ? "player-turn" : ""}
              style={{ whiteSpace: "pre-line" }}
            >
              {turn}
            </p>
          );
        })}
      </div>
      {isLoading && (
        <div className="loading-overlay">
          <img src={spinner} alt="Loading..." className="spinner" />
        </div>
      )}
    </div>
  );
};

export default LeftContainer;
