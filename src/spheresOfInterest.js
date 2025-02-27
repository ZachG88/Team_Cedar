import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const spheres = [
    { id: 1, name: "Forests, Land, & Wildlife", color: "#582626", description: "Forests, Land, & Wildlife" },
    { id: 2, name: "Water and Fisheries", color: "#9B1323", description: "Water and Fisheries" },
    { id: 3, name: "Government, Law, & Treaty Protection", color: "#C34A4A", description: "Government, Law, & Treaty Protection" },
    { id: 4, name: "Data and Technology", color: "#B85C38", description: "Data and Technology" },
    { id: 5, name: "Cultural and Tribal Resources", color: "#7A2F2F", description: "Cultural and Tribal Resources" },
  ];
  
  const SpheresOfInterest = () => {
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
          top: `${40 + 30 * Math.sin((index / spheres.length) * 2 * Math.PI)}%`,
          left: `${40 + 30 * Math.cos((index / spheres.length) * 2 * Math.PI)}%`,
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
    width: "670px",
    height: "670px",
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
  
  export default SpheresOfInterest;