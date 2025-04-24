import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import './App.css';

const allSpheres = [
  {
    name: "Water and Fisheries",
    color: "#8cb0bc",
    description:
      "This field focuses on protecting freshwater and marine ecosystems while ensuring the sustainability of fish populations through both fisheries management and aquaculture. It involves monitoring water quality, restoring aquatic habitats, and managing fisheries to support both ecological balance and Indigenous food systems. Careers in this area include Fisheries Biologist, Hatchery Manager, Watershed Restoration Coordinator, Water Quality Specialist, and a variety of technicians. ",
  },
  {
    name: "Forests, Land, & Wildlife",
    color: "#627943",
    description:
      "Dedicated to preserving forests, natural landscapes, and the wildlife that inhabits them, this field plays a crucial role in maintaining biodiversity and preventing habitat loss. It includes land stewardship and wildlife conservation efforts, often integrating traditional ecological knowledge. Careers include Forest and Conservation Program Manager, Wildlife Biologist, Habitat Program Manager, and a variety of technicians.",
  },
  {
    name: "Government, Law, & Treaty Protection",
    color: "#9f90a2",
    description:
      "This field focuses on creating, enforcing, and advocating for laws and policies that protect Indigenous lands, resources, and treaty rights. It involves legal work, land management, and policy development to ensure environmental justice and sovereignty. Careers include Tribal Attorney, Policy Advisors and Natural Resource Manager.",
  },
  {
    name: "Cultural and Tribal Resources",
    color: "#acb659",
    description:
      "Centered on preserving Indigenous heritage, this field involves protecting sacred sites, passing down traditional ecological knowledge, and ensuring cultural sustainability through environmental stewardship. It often includes community education, land restoration, and advocacy for cultural practices. Careers include Cultural Resource Manager and Environmental Outreach and Education Coordinator.",
  },
  {
    name: "Data and Technology",
    color: "#36505d",
    description:
      "This field uses digital tools and scientific data to support conservation efforts, monitor environmental changes, and guide land management decisions. Technologies like GIS mapping, remote sensing, and data analysis help track climate impacts and natural resource use. Careers include GIS Specialist, Environmental Data Analyst, and Data Manager.",
  },
];

const getTopThreeSpheres = (userVector) => {
  return userVector
    .map((score, index) => ({
      ...allSpheres[index],
      score,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
};

const SpheresResults = ({ userVector }) => {
  const [hoveredSphere, setHoveredSphere] = useState(null);

  const topThree = getTopThreeSpheres(userVector);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "12vw",
        maxWidth: "90vw",
        marginLeft: "-10px",
        paddingBottom: "5%"
      }}
    >
      
        <div style={containerStyle}>
          {topThree.map((sphere, index) => (
            <HoverCircle
              key={sphere.name}
              index={index}
              {...sphere}
              setHoveredSphere={setHoveredSphere}
            />
          ))}
        </div>
     
      <div className="spheres-text-wrapper">
        <h3 style={{ fontSize: "clamp(1rem, 3vw, 3rem)", fontFamily: "Nunito, san-serif" }}>
          {hoveredSphere ? hoveredSphere.name : "Learn More"}
        </h3>
        <p style={{ fontSize: "clamp(.5rem, 2vw, 1.5rem)", color: "#311106" }}>
          {hoveredSphere
            ? hoveredSphere.description
            : "These spheres match your interests the most. Hover over a circle to learn more about each field and the careers they include. Keep an eye out for these colors on the explore page!"}
        </p>
        {!hoveredSphere && (
          <div style={{ color: "#9f90a2" }}>
            <p className="hover-text" style={{fontFamily: "Nunito, san-serif"}}>Hover on the circles for more info.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const HoverCircle = ({ name, color, index, description, setHoveredSphere }) => {
  const [hovered, setHovered] = useState(false);

  const props = useSpring({
    transform: hovered ? "scale(1.4)" : "scale(1)",
    opacity: hovered ? 1 : 0.7,
    config: { tension: 200, friction: 12 },
  });

  return (
    <animated.div
      style={{
        ...circleStyle,
        ...props,
        backgroundColor: color,
        top: `${35 + 30 * Math.sin((index / 3) * 2 * Math.PI)}%`,
        left: `${35 + 30 * Math.cos((index / 3) * 2 * Math.PI)}%`,
      }}
      onMouseEnter={() => {
        setHovered(true);
        setHoveredSphere({ name, description });
      }}
      onMouseLeave={() => {
        setHovered(false);
        setHoveredSphere(null);
      }}
    >
      <span style={textStyle}>{name}</span>
    </animated.div>
  );
};

const containerStyle = {
  position: "relative",
  width: "clamp(100px, 40vw, 670px)",
  height: "clamp(100px, 40vw, 670px)",
  alignItems: "center",
  justifyContent: "center"
};

const circleStyle = {
  position: "absolute",
  width: "clamp(10px, 20vw, 250px)",
  height: "clamp(10px, 20vw, 250px)",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: "clamp(7px, 1.7vw, 20px)",
  fontWeight: "bold",
  textAlign: "center",
  cursor: "pointer",
  transition: "transform 0.2s ease-out",
};

const textStyle = {
  padding: "5px",
  fontFamily: "Nunito, san-serif",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  maxWidth: "12vw"
};

export default SpheresResults;
