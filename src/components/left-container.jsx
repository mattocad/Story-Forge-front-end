import React from "react";
import "./left-container.css";

const LeftContainer = ({ narrative }) => {
  return (
    <div className="left-container">
      <pre>{narrative}</pre>
    </div>
  );
};

export default LeftContainer;
