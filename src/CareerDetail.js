import React, {useState} from "react";
import { Link, useParams } from "react-router-dom";
import careers from "./CareersEx";
import careerImages from "./CareerImages.json";
import TagList from "./TagList";

const CareerDetail = () => {
  const { careerId } = useParams();
  const career = careers.find((c) => c.id == careerId);

  if (!career) {
    return <h2>Career not found</h2>;
  }

  const getRandomImage = (careerId) => {
    const index = Math.abs(careerId.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)) % careerImages.length;
    return careerImages[index]; // Assign a consistent random image based on career ID
    };

    const spheres = [
      "Water and Fisheries",
      "Forests, Land, and Wildlife",
      "Government, Law, and Treaty Protection",
      "Cultural and Tribal Resources",
      "Data and Technology",
    ];
  
    const sphereColors = {
      "Water and Fisheries": "#8cb0bc",
      "Forests, Land, and Wildlife": "#627943",
      "Government, Law, and Treaty Protection": "#9f90a2",
      "Cultural and Tribal Resources": "#acb659",
      "Data and Technology": "#36505d",
    };

    const getTopSphere = (career) => {
      const maxIndex = career.vector.indexOf(Math.max(...career.vector));
      return spheres[maxIndex];
    };
    
    const getTopSphereColor = (career) => {
      const topSphere = getTopSphere(career);
      return sphereColors[topSphere] || "#000";
    };

    function getTitleColor(topSphere) {
      switch (topSphere) {
        case "Forests, Land, and Wildlife":
          return "#d0f3a2";
        case "Government, Law, and Treaty Protection":
          return "#372b39";
        case "Cultural and Tribal Resources":
          return "#3b3f1e";
        case "Water and Fisheries":
          return "#324045";
        case "Data and Technology":
          return "#b6cfdb";
        default:
          return "white";
      }
    }



const CareerButton = ({ topSphereColor, titleColor }) => {
  const [hovered, setHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: hovered ? "white" : titleColor,
    color: topSphereColor,
    padding: "1vw 2vw",
    marginTop: "2vw",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "clamp(5px, 2vw, 15px)"
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Back to Explore
    </button>
  );
};


    const topSphere = getTopSphere(career);
    const bgColor = sphereColors[topSphere];
    const titleColor = getTitleColor(topSphere);

return (
    
  <div
  className="career-hero-section"
  style={{ backgroundColor: bgColor }}
>
  <div className="career-content">
    <div className="career-text">
      <h1 className="career-title" style={{ color: titleColor }}>{career.title}</h1>
      <TagList categories={career.categories} />
      <p className="career-duties">{career.duties}</p>
      <h3 className="section-title">Key Skills:</h3>
      <p className="skills-list">{career.skills}</p>
      <h3 className="section-title">Related Education:</h3>
      <p className="education-info">{career.education}</p>
      <Link to="/explore">
      <CareerButton
        topSphereColor={bgColor}
        titleColor={titleColor}
      />
      </Link>
    </div>
    <div className="career-image-container">
      <img
        src={getRandomImage(career.id)}
        alt={career.title}
        className="career-image-right"
      />
    </div>
  </div>
</div>
)  
};

export default CareerDetail;
