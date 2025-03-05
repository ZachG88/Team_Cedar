import React from "react";
import { Link, useParams } from "react-router-dom";
import careers from "./CareersEx";
import careerImages from "./CareerImages.json";

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

return (
    <div className="career-detail-container">
        <h1 className="career-title">{career.title}</h1>
        <img src={getRandomImage(career.id)} alt={career.title} className="career-image" />
        <p className="career-duties">{career.duties}</p>
        <h3 className="section-title">Key Skills:</h3>
        <p className="skills-list"> {career.skills}</p>
        <h3 className="section-title">Related Education:</h3>
        <p className="education-info">{career.education}</p>
        {/* <h3 className="section-title">Contact Information:</h3>
        <p className="contact-info">{career.contactInfo}</p> */}
        <Link to="/explore">
        <button className="back-button">Back to Explore</button>
        </Link>
    </div>
    );
      
};

export default CareerDetail;
