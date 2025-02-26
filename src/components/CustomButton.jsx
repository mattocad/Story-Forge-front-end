import React from "react";
import "./CustomButton.css";

const CustomButton = ({ imageSrc, altText, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      <img src={imageSrc} alt={altText} className="button-image" />
    </button>
  );
};

export default CustomButton;
