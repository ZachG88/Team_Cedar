import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Survey from "./Survey";
import Nav from "./NavBar";

const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <header style={{ textAlign: "center", padding: "20px" }}>
        <h1>Welcome to the Natural Conservation Career Explorer</h1>
        <p>Discover career paths in conservation based on your interests!</p>
        <Link to="/survey">
          <button>Start the Survey</button>
        </Link>
      </header>

      {/* About the Career Explorer */}
      <section style={{ padding: "20px", background: "#f9f9f9", margin: "20px 0" }}>
        <h2>About This Tool</h2>
        <p>
          This tool is designed to help Indigenous youth explore careers in environmental conservation. 
          By answering a few questions, you’ll be matched with potential career paths that align with your interests and passions.
        </p>
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
        <h2>Honoring Indigenous Values</h2>
        <p>
          Conservation work is deeply connected to Indigenous knowledge and traditions. Many careers in this field emphasize 
          stewardship, sustainability, and the protection of land, water, and cultural heritage.
        </p>
        <Link to="/values">
          <button>Learn More</button>
        </Link>
      </section>

      {/* Call to Action */}
      <section style={{ textAlign: "center", padding: "20px" }}>
        <h2>Ready to Find Your Path?</h2>
        <Link to="/survey">
          <button>Take the Survey</button>
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

// Indigenous Values Page
const IndigenousValues = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Indigenous Values in Conservation</h1>
      <p>Indigenous communities have been stewards of the land for generations. Conservation careers allow us to continue these traditions while protecting natural resources.</p>
      <ul>
        <li><strong>Respect for Nature:</strong> Many Indigenous cultures view land, water, and wildlife as sacred.</li>
        <li><strong>Intergenerational Knowledge:</strong> Passing down environmental knowledge ensures sustainability.</li>
        <li><strong>Community-Based Stewardship:</strong> Conservation should benefit both nature and local communities.</li>
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
        <Route path="/values" element={<IndigenousValues />} />
      </Routes>
    </Router>
  );
};

export default App;
