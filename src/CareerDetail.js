import React from "react";
import { Link, useParams } from "react-router-dom";
import careers from "./CareersEx";

const CareerDetail = () => {
  const { careerId } = useParams();
  const career = careers.find((c) => c.id == careerId);

  if (!career) {
    return <h2>Career not found</h2>;
  }

  return (
    <div className="career-detail-container">
      <h1>{career.title}</h1>
      <img src={career.image} alt={career.title} className="career-image" />
      <p>{career.duties}</p>
      <h3>Key Skills:</h3>
      <ul>
        {career.skills}
      </ul>
      <h3>Related Education:</h3>
      <p>{career.education}</p>
      <h3>Contact Information:</h3>
      <p>{career.contactInfo}</p>
      <Link to="/explore">
        <button className="back-button">Back to Explore</button>
      </Link>
    </div>
  );
};

export default CareerDetail;
