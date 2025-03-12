// Resources Page
import { Link } from "react-router-dom";
import React, { useState } from "react";
import careers from "./CareersEx";
import careerImages from "./CareerImages.json";

const Explore = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const spheres = [
    "Water and Fisheries",
    "Forests, Land, and Wildlife",
    "Government, Law, and Treaty Protection",
    "Cultural and Tribal Resources",
    "Data and Technology",
  ];

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  const filteredCareers = careers.filter((career) => {
    const maxIndex = career.vector.indexOf(Math.max(...career.vector)); // Find highest value index in vector
    return (
      career.title.toLowerCase().includes(search.toLowerCase()) &&
      (filter ? maxIndex === spheres.indexOf(filter) : true) // Match selected sphere
    );
  });

  const getRandomImage = (careerId) => {
    const index = Math.abs(careerId.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)) % careerImages.length;
    return careerImages[index]; // Assign a consistent random image based on career ID
    };

  return (
    <div className="career-library">
      <h1>Explore Conservation Careers</h1>
      
      {/* Search & Filter Controls */}
      <div className="career-controls">
        <input
          type="text"
          placeholder="Search careers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
        <select onChange={(e) => setFilter(e.target.value)} className="filter-dropdown">
            <option value="">All Spheres</option>
            {spheres.map((sphere, index) => (
                <option key={index} value={sphere}>{sphere}</option>
            ))}
        </select>
      </div>

      {/* Career Grid */}
      <div className="career-grid">
        {filteredCareers.map((career) => (
          <div key={career.id} className="career-card">
            <div className="career-card-inner">
              {/* Front of the Card */}
              <div className="career-card-front">
                {/* <img src={career.image} alt={career.title} /> */}
                <img 
                    //src={career.image || getRandomImage(career.id)} 
                    src={getRandomImage(career.id)} 
                    alt={career.title} 
                />
                <h2>{career.title}</h2>
              </div>

              {/* Back of the Card */}
              <div className="career-card-back">
                <h2>{career.title}</h2>
                <p>{career.duties ? career.duties.substring(0, 200) : "No description available"}...</p>
                <p><strong>Skills:</strong> {career.skills ? career.skills.substring(0, 200) : "No description available"}</p>
                <Link to={`/career/${career.id}`} className="learn-more">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
