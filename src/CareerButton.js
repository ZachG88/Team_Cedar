import React, { useState } from "react";

const CareerButton = ({ topSphereColor, titleColor, onClick, children }) => {
  const [hovered, setHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: hovered ? titleColor : topSphereColor,
    color: hovered ? topSphereColor : titleColor,
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "16px",
    fontWeight: "bold",
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CareerButton;
