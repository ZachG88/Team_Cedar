// Resources Page
import { Link } from "react-router-dom";
import React, { useState } from "react";
import careers from "./CareersEx";
import careerImages from "./CareerImages.json";
import { Tooltip } from 'react-tooltip';
import TagList from "./TagList";

const Explore = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [flippedCard, setFlippedCard] = useState(null);


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

  const getTextColor = (backgroundHex) => {
    const hex = backgroundHex.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
    return brightness > 150
    ? darkenHex(backgroundHex, 100) // light background → darken text
    : lightenHex(backgroundHex, 150); // dark background → lighten text
  };

  const darkenHex = (hex, amount = 20) => {
    const color = hex.replace("#", "");
    const r = Math.max(0, parseInt(color.substring(0, 2), 16) - amount);
    const g = Math.max(0, parseInt(color.substring(2, 4), 16) - amount);
    const b = Math.max(0, parseInt(color.substring(4, 6), 16) - amount);
    return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  };

  const lightenHex = (hex, amount = 40) => {
    const color = hex.replace("#", "");
    const r = Math.min(255, parseInt(color.substring(0, 2), 16) + amount);
    const g = Math.min(255, parseInt(color.substring(2, 4), 16) + amount);
    const b = Math.min(255, parseInt(color.substring(4, 6), 16) + amount);
    return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  const filteredCareers = careers.filter((career) => {
    const maxIndex = career.vector.indexOf(Math.max(...career.vector));
    const matchesSearch = career.title.toLowerCase().includes(search.toLowerCase());
    const matchesSphere = filter ? maxIndex === spheres.indexOf(filter) : true;
    const matchesCategory = categoryFilter ? career.categories.includes(categoryFilter) : true;
  
    return matchesSearch && matchesSphere && matchesCategory;
  });
  
  const getTopSphereColor = (career) => {
    const maxIndex = career.vector.indexOf(Math.max(...career.vector));
    const topSphere = spheres[maxIndex];
    return sphereColors[topSphere] || "#000"; // fallback to black
  };

  const getRandomImage = (careerId) => {
    const index = Math.abs(careerId.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)) % careerImages.length;
    return careerImages[index]; // Assign a consistent random image based on career ID
    };
    
  return (
    <div className="career-library">
      <h1 style={{paddingTop: "3vw", fontSize: "4vw"}}>Explore Conservation Careers</h1>
      
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
        <select onChange={(e) => setCategoryFilter(e.target.value)} className="filter-dropdown">
          <option value="">All Categories</option>
          {[...new Set(careers.flatMap(c => c.categories))].map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Career Grid */}
      <div className="career-grid">
        {filteredCareers.map((career) => (
              <div
              key={career.id}
              className={`career-card ${flippedCard === career.id ? "flipped" : ""}`}
              onClick={() => setFlippedCard(flippedCard === career.id ? null : career.id)}
              style={{
                boxShadow: `0 8px 12px ${getTopSphereColor(career)}`,
                transition: "box-shadow 0.3s ease",
              }}
            >
              <div className="career-card-inner">
                <div className="career-card-front"  data-tooltip-content="Click to flip" data-tooltip-id="card-tooltip" data-tooltip-place="bottom">
                  <img src={getRandomImage(career.id)} alt={career.title} />
                  <h2 style={{fontFamily:"Nunito, sans-serif"}}>{career.title}</h2>
                </div>
                <div className="career-card-back" 
                style={{
                  backgroundColor: getTopSphereColor(career),
                  color: getTextColor(getTopSphereColor(career)),
                }}>
                  <h2 style={{fontFamily:"Nunito, sans-serif", marginBottom: "0.5vw"}}>{career.title}</h2>
                  <p>{career.duties ? truncateText(career.duties, 200) : "No description available"}...</p>
                  <Link to={`/career/${career.id}`} className="learn-more" data-tip={career.title}>
                    Learn More
                  </Link>
                </div>
              </div>
              
            </div>
            
        ))}
      </div>
      <Tooltip id="card-tooltip" className="custom-tooltip" />
    </div>
    
  );
};

export default Explore;
