import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const spheres = [
    { id: 1, name: "Directors and Leaders", color: "#6A2E2E", description: "Directors and Leaders" }, 
    { id: 2, name: "Policy, Planning, and Management", color: "#B71C2C", description: "Policy, Planning, and Management" }, 
    { id: 3, name: "Scientific and Technical Specialists", color: "#D15757", description: "Scientific and Technical Specialists" }, 
    { id: 4, name: "Technicians and Field Support", color: "#C76C48", description: "Technicians and Field Support" },  
    { id: 5, name: "Conservation and Restoration", color: "#9B1323", description: "Conservation and Restoration" }, 
    { id: 6, name: "Enforcement and Advocacy", color: "#8A3C3C", description: "Enforcement and Advocacy" }, 
    { id: 7, name: "Outreach and Administrative Support", color: "#A25050", description: "Outreach and Administrative Support" },
  ];
  
  const CareerPaths = () => {
    return (
      <div style={containerStyle}>
        {spheres.map((sphere, index) => (
          <HoverCircle key={sphere.id} index={index} {...sphere} />
        ))}
      </div>
    );
  };
  
  const HoverCircle = ({ label, description, color, index }) => {
    const [hovered, setHovered] = React.useState(false);
  
    const props = useSpring({
      transform: hovered ? "scale(1.4)" : "scale(1)",
      opacity: hovered ? 1 : 0.8,
      config: { tension: 200, friction: 12 },
    });
  
    return (
      <animated.div
        style={{
          ...circleStyle,
          ...props,
          backgroundColor: color,
          top: `${40 + 60 * Math.sin((index / spheres.length) * 2 * Math.PI)}%`,
          left: `${40 + 60 * Math.cos((index / spheres.length) * 2 * Math.PI)}%`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span style={textStyle}>{hovered ? description : label}</span>
      </animated.div>
    );
  };
  
  const containerStyle = {
    position: "relative",
    width: "400px",
    height: "400px",
  };
  
  const circleStyle = {
    position: "absolute",
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
    cursor: "pointer",
    transition: "transform 0.2s ease-out",
  };
  
  const textStyle = {
    padding: "5px",
  };
  
  export default CareerPaths;