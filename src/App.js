import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Survey from "./Survey";
import Nav from "./NavBar";
import OurTeam from "./Team";
import './App.css';
import { color } from "framer-motion";

const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <img src="/mountains.png" alt="Mountains" className="full-width-image"/>
      <header style={{ textAlign: "center", paddingTop: "30px", paddingBottom: "200px", backgroundColor: "#311106",    }}>
        <h1 style={{ color: "white", fontSize: "3rem" }}>Welcome to the Natural Conservation Career Explorer</h1>
        <p style={{ color: "white", fontSize: "1.5rem", paddingBottom: "30px"}}>Discover career paths in conservation based on your interests!</p>
        <Link to="/survey">
          <button style={{ fontSize: "1.5rem", borderRadius: "20px"}}>Start the Survey</button>
        </Link>
      </header>

      {/* About the Career Explorer */}
      <section
  style={{
    padding: "20px",
    background: "#f9f9f9",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }}
>
  <div style={{ flex: 1, textAlign: "left", paddingRight: "20px" }}>
    <h2 style={{fontSize: "2rem" }}>About This Tool</h2>
    <p style={{fontSize: "1.5rem" }}>
      This tool is designed to help Indigenous users explore careers related to nature conservation. By taking our survey, you’ll be
      matched with potential career paths that align with your interests and
      passions. Whether you’re drawn to protecting natural resources, working
      with wildlife, or advocating for sustainable practices, you have the power to make a meaningful impact on the land, water,
      and communities you care about in your career.
    </p>
  </div>
  <img
    src="aboutPic.png"
    alt="About This Tool"
    style={{ width: "600px", height: "auto", borderRadius: "10px" }}
  />
</section>

      {/* Example Career Paths */}
      <section style={{ padding: "20px" }}>
        <h2>Explore Careers in Conservation</h2>
        <ul>
          <li>Water and Fisheries - e.g., Fisheries Biologist, Water Quality Manager</li>
          <li>Forests, Land, and Wildlife - e.g., Wildlife Conservationist, Forestry Manager</li>
          <li>Government, Law, and Treaty Protection - e.g., Policy Advisor, Tribal Law Officer</li>
          <li>Cultural and Tribal Resources - e.g., Tribal Historic Preservation Officer, Anthropologist</li>
          <li>Data and Technology - e.g., GIS Specialist, Environmental Data Analyst</li>
        </ul>
      </section>

      {/* Indigenous Values Section */}
      <section style={{ padding: "20px", background: "#f1f1f1", margin: "20px 0" }}>
        <h2>Meet the Team Behind This Project</h2>
        <Link to="/team">
          <button>Learn More</button>
        </Link>
      </section>

      {/* Call to Action */}
      <section style={{ textAlign: "center", paddingTop: "30px", paddingBottom: "50px", backgroundColor: "#311106"}}>
        <h2 style={{ color: "white", fontSize: "1.5rem"}}>Ready to Find Your Path?</h2>
        <Link to="/survey">
          <button style={{ fontSize: "1.2rem", borderRadius: "20px"}}>Take the Survey</button>
        </Link>
      </section>
    </div>
  );
};

// Resources Page
const Resources = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Resources</h1>
      <p>Here are some useful links and programs for starting a career in conservation:</p>
      <ul>
        <li><a href="https://www.fws.gov/careers" target="_blank" rel="noopener noreferrer">US Fish & Wildlife Careers</a></li>
        <li><a href="https://www.fs.usda.gov/working-with-us/careers" target="_blank" rel="noopener noreferrer">US Forest Service Careers</a></li>
        <li><a href="https://www.nature.org/en-us/about-us/careers/" target="_blank" rel="noopener noreferrer">The Nature Conservancy Jobs</a></li>
      </ul>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

// App Component with Routing
const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/team" element={<OurTeam />} />
      </Routes>
    </Router>
  );
};

export default App;

// import React from 'react';

// function App() {
//   return (
//     <div>
//       <h1>Welcome to the Natural Conservation Career Explorer</h1>
//     </div>
//   );
// }

// export default App;