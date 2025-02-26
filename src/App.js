import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Survey from "./Survey";
import Nav from "./NavBar";
import About from "./About";
import Explore from "./ExplorePage";

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
        <h2>Our Team</h2>
        <p>
         Checkout our team
        </p>
        <Link to="/team">
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

// App Component with Routing
const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
