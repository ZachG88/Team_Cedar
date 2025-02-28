// Resources Page
import { Link } from "react-router-dom";
import React, { useState } from "react";
import careers from "./CareersEx";

const Explore = () => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");
  
    const filteredCareers = careers.filter((career) =>
      career.title.toLowerCase().includes(search.toLowerCase()) &&
      (filter ? career.skills.includes(filter) || career.education.includes(filter) : true)
    );
  
    return (
      <div className="career-library">
        <h1>Explore Conservation Careers</h1>
        <div className="career-controls">
          <input
            type="text"
            placeholder="Search careers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-bar"
          />
          <select onChange={(e) => setFilter(e.target.value)} className="filter-dropdown">
            <option value="">All Fields</option>
            <option value="Biology">Biology</option>
            <option value="Policy">Policy</option>
            <option value="Technology">Technology</option>
          </select>
        </div>
        <div className="career-grid">
          {filteredCareers.map((career) => (
            <div key={career.title} className="career-card">
              <img src={career.image} alt={career.title} className="career-image" />
              <div className="career-info">
                <h2>{career.title}</h2>
                <p>{career.duties}</p>
                <p><strong>Skills:</strong> {career.skills}</p>
                <p><strong>Education:</strong> {career.education}</p>
                <a href={career.contact} className="career-link" target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Explore;



  //        <Link to="/">Back to Home</Link>
