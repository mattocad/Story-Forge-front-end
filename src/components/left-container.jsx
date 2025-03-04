import React from "react";
import "./left-container.css";
import spinner from "../assets/spinner.png";

const LeftContainer = ({ narrative, isLoading }) => {
  return (
    <div className="left-container-wrapper">
      <div className="left-container">
        <pre>{narrative}</pre>
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

{
  /* You can use an <img> for a spinner icon or a CSS-based spinner */
}
{
  /* <img src={spinner} alt="Loading..." className="loading-icon" /> */
}
