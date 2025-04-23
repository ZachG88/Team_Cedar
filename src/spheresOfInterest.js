import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import './App.css';

const spheres = [
  {
    id: 1,
    name: "Forests, Land, & Wildlife",
    color: "#627943",
    description:
      "Dedicated to preserving forests, natural landscapes, and the wildlife that inhabits them, this field plays a crucial role in maintaining biodiversity and preventing habitat loss. It includes land stewardship and wildlife conservation efforts, often integrating traditional ecological knowledge. Careers include Forest and Conservation Program Manager, Wildlife Biologist, Habitat Program Manager, and a variety of technicians.",
  },
  {
    id: 2,
    name: "Water and Fisheries",
    color: "#8cb0bc",
    description:
      "This field focuses on protecting freshwater and marine ecosystems while ensuring the sustainability of fish populations through both fisheries management and aquaculture. It involves monitoring water quality, restoring aquatic habitats, and managing fisheries to support both ecological balance and Indigenous food systems. Careers in this area include Fisheries Biologist, Hatchery Manager, Watershed Restoration Coordinator, Water Quality Specialist, and a variety of technicians. ",
  },
  {
    id: 3,
    name: "Government, Law, & Treaty Protection",
    color: "#9f90a2",
    description:
      "This field focuses on creating, enforcing, and advocating for laws and policies that protect Indigenous lands, resources, and treaty rights. It involves legal work, land management, and policy development to ensure environmental justice and sovereignty. Careers include Tribal Attorney, Policy Advisors and Natural Resource Manager.",
  },
  {
    id: 4,
    name: "Data and Technology",
    color: "#36505d",
    description:
      "This field uses digital tools and scientific data to support conservation efforts, monitor environmental changes, and guide land management decisions. Technologies like GIS mapping, remote sensing, and data analysis help track climate impacts and natural resource use. Careers include GIS Specialist, Environmental Data Analyst, and Data Manager.",
  },
  {
    id: 5,
    name: "Cultural and Tribal Resources",
    color: "#acb659",
    description:
      "Centered on preserving Indigenous heritage, this field involves protecting sacred sites, passing down traditional ecological knowledge, and ensuring cultural sustainability through environmental stewardship. It often includes community education, land restoration, and advocacy for cultural practices. Careers include Cultural Resource Manager and Environmental Outreach and Education Coordinator.",
  },
];

const SpheresOfInterest = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredSphere, setHoveredSphere] = useState(null);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "90vw",
        margin: "0 auto",
      }}
    >
      <div style={{ flex: "1", textAlign: "right" }}>
        <div style={{ marginLeft: isMobile ? 0 : "clamp(-80px, 8vw, -120px)", marginBottom: "100px" }}>
          <div style={containerStyle}>
            {spheres.map((sphere, index) => (
              <HoverCircle
                key={sphere.id}
                index={index}
                {...sphere}
                setHoveredSphere={setHoveredSphere}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className="spheres-text-wrapper"
      >
        <h3 style={{ fontSize: "clamp(1rem, 3vw, 3rem)", margin: "0 0" }}>
          {hoveredSphere ? hoveredSphere.name : "Spheres of Interest"}
        </h3>
        <p style={{ fontSize: "clamp(.5rem, 2vw, 1.5rem)", color: "#311106" }}>
          {hoveredSphere
            ? hoveredSphere.description
            : "These spheres of interest describe the kinds of fields careers are situated in. Hover over each circle to learn more about the various spheres of interest for nature conservation careers."}
        </p>
        {!hoveredSphere && (
          <div
            style={{
              marginTop: "0px",
              color: "#9f90a2",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p className="hover-text">
              Hover on the circles for more info.
            </p>
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
        top: `${40 + 30 * Math.sin((index / spheres.length) * 2 * Math.PI)}%`,
        left: `${40 + 30 * Math.cos((index / spheres.length) * 2 * Math.PI)}%`,
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
  position: "absolute",
  width: "clamp(100px, 50vw, 670px)",
  height: "clamp(100px, 50vw, 670px)",
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
  fontSize: "clamp(7px, 1.5vw, 20px)",
  fontWeight: "bold",
  textAlign: "center",
  cursor: "pointer",
  transition: "transform 0.2s ease-out",
};

const textStyle = {
  padding: "5px",
};

export default SpheresOfInterest;
