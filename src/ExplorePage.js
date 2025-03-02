// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import careers from "./CareersEx";

// const Explore = () => {
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("");

//   const truncateText = (text, maxLength) => {
//     return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
//   };

//   const filteredCareers = careers.filter((career) =>
//     career.title.toLowerCase().includes(search.toLowerCase()) &&
//     (filter ? career.skills.includes(filter) || career.education.includes(filter) : true)
//   );

//   return (
//     <div className="career-library">
//       <h1>Explore Conservation Careers</h1>
      
//       {/* Search & Filter Controls */}
//       <div className="career-controls">
//         <input
//           type="text"
//           placeholder="Search careers..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="search-bar"
//         />
//         <select onChange={(e) => setFilter(e.target.value)} className="filter-dropdown">
//           <option value="">All Fields</option>
//           <option value="Biology">Biology</option>
//           <option value="Policy">Policy</option>
//           <option value="Technology">Technology</option>
//         </select>
//       </div>

//       {/* Career Grid */}
//       <div className="career-grid">
//         {filteredCareers.map((career) => (
//           <div key={career.id} className="career-card">
//             <img src={career.image} alt={career.title} className="career-image" />
//             <div className="career-info">
//               <h2>{career.title}</h2>
//               <p>{truncateText(career.duties, 300)}</p>
//               <p><strong>Skills:</strong> {truncateText(career.skills, 300)}</p>
//               <p><strong>Education:</strong> {career.education}</p>
              
//               {/* Link to Career Detail Page */}
//               <Link to={`/career/${career.id}`} className="learn-more">
//                 Learn More
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Explore;


//   //        <Link to="/">Back to Home</Link>


import React, { useState } from "react";
import { Link } from "react-router-dom";
import careers from "./CareersEx";

const Explore = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  const filteredCareers = careers.filter((career) =>
    career.title.toLowerCase().includes(search.toLowerCase()) &&
    (filter ? career.skills.includes(filter) || career.education.includes(filter) : true)
  );

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
          <option value="">All Fields</option>
          <option value="Biology">Biology</option>
          <option value="Policy">Policy</option>
          <option value="Technology">Technology</option>
        </select>
      </div>

      {/* Career Grid */}
      <div className="career-grid">
        {filteredCareers.map((career) => (
          <div key={career.id} className="career-card">
            <div className="career-card-inner">
              {/* Front of the Card */}
              <div className="career-card-front">
                <img src={career.image} alt={career.title} />
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
