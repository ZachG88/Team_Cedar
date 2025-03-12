import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const spheres = [
  {
    id: 1,
    name: "Forests, Land, & Wildlife",
    color: "#6a7542",
    description:
      "Dedicated to preserving forests, natural landscapes, and the wildlife that inhabits them, this field plays a crucial role in maintaining biodiversity and preventing habitat loss. It includes land stewardship and wildlife conservation efforts, often integrating traditional ecological knowledge. Careers include Forest and Conservation Program Manager, Wildlife Biologist, Habitat Program Manager, and a variety of technicians.",
  },
  {
    id: 2,
    name: "Water and Fisheries",
    color: "#4b7e93",
    description:
      "This field focuses on protecting freshwater and marine ecosystems while ensuring the sustainability of fish populations through both fisheries management and aquaculture. It involves monitoring water quality, restoring aquatic habitats, and managing fisheries to support both ecological balance and Indigenous food systems. Careers in this area include Fisheries Biologist, Hatchery Manager, Watershed Restoration Coordinator, Water Quality Specialist, and a variety of technicians. ",
  },
  {
    id: 3,
    name: "Government, Law, & Treaty Protection",
    color: "#A25050",
    description:
      "This field focuses on creating, enforcing, and advocating for laws and policies that protect Indigenous lands, resources, and treaty rights. It involves legal work, land management, and policy development to ensure environmental justice and sovereignty. Careers include Tribal Attorney, Policy Advisors and Natural Resource Manager.",
  },
  {
    id: 4,
    name: "Data and Technology",
    color: "#C76C48",
    description:
      "This field uses digital tools and scientific data to support conservation efforts, monitor environmental changes, and guide land management decisions. Technologies like GIS mapping, remote sensing, and data analysis help track climate impacts and natural resource use. Careers include GIS Specialist, Environmental Data Analyst, and Data Manager.",
  },
  {
    id: 5,
    name: "Cultural and Tribal Resources",
    color: "#9B1323",
    description:
      "Centered on preserving Indigenous heritage, this field involves protecting sacred sites, passing down traditional ecological knowledge, and ensuring cultural sustainability through environmental stewardship. It often includes community education, land restoration, and advocacy for cultural practices. Careers include Cultural Resource Manager and Environmental Outreach and Education Coordinator.",
  },
];

const SpheresOfInterest = () => {
  const [hoveredSphere, setHoveredSphere] = useState(null);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div style={{ flex: "1", textAlign: "right" }}>
        <div style={{ marginLeft: "-120px", marginBottom: "100px" }}>
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
        style={{
          flex: "1",
          borderRadius: "50px",
          maxWidth: "500px",
          minHeight: "500px",
          marginTop: "100px",
        }}
      >
        <h3 style={{ fontSize: "3rem", margin: "20px 0" }}>
          {hoveredSphere ? hoveredSphere.name : "Spheres of Interest"}
        </h3>
        <p style={{ fontSize: "1.5rem", color: "#311106" }}>
          {hoveredSphere
            ? hoveredSphere.description
            : "Rather than the type of career, these spheres of interest describe the kinds of fields careers are situated in. Hover over each circle to learn more about the various spheres of interest for nature conservation careers."}
        </p>
        {!hoveredSphere && (
          <div
            style={{
              marginTop: "30px",
              fontSize: "2.5rem",
              color: "#888",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ marginTop: "20px", fontSize: "5rem" }}>⤶</span>
            <span style={{ marginLeft: "-50px", paddingBottom: "100px" }}>
              Hover for more info.
            </span>
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
