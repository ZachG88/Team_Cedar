import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Survey from "./Survey";
import Nav from "./NavBar";
import About from "./About";
import Explore from "./ExplorePage";
import OurTeam from "./Team";
import './App.css';
import { color } from "framer-motion";
import SpheresOfInterest from "./spheresOfInterest";
import CareerPaths from "./CareerPaths";
import CareerDetail from "./CareerDetail";

const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <div style={{ backgroundColor: "#edfcff"}}>
      <img src="/newHero.png" alt="Mountains" className="full-width-image"/>
      </div>
      <header style={{ textAlign: "center", marginTop: "-1px", paddingTop: "clamp(1rem, 5vw, 3rem)", paddingBottom: "clamp(3rem, 12vw, 15rem)", backgroundColor: "#536639",    }}>
        <h1 style={{ color: "white", fontSize: "clamp(1.5rem, 5vw, 3.5rem)", marginTop: "0px", paddingTop: "5px"}}>Welcome to the Natural Conservation Career Explorer</h1>
        <p style={{ color: "white", fontSize: "clamp(.7rem, 3vw, 1.5rem)", paddingBottom: "20px"}}>Discover career paths in conservation based on your interests!</p>
        <Link to="/survey">
          <button className="survey-button">Start the Survey →</button>
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
  <h2 style={{ fontSize: "clamp(1rem, 3vw, 2rem)" }}>About This Tool</h2>
  <p style={{ fontSize: "clamp(.5rem, 2vw, 1.5rem)" }}>
      This tool is designed to help Indigenous users explore careers related to nature conservation. By taking our survey, you’ll be
      matched with potential career paths that align with your interests and
      passions. Whether you’re drawn to protecting natural resources, working
      with wildlife, or advocating for sustainable practices, you have the power to make a meaningful impact on the land, water,
      and communities you care about in your career.
    </p>
    <Link to="/about">
          <button className="learn-more-button">Learn More</button>
    </Link>
  </div>
  <img src="aboutPic.jpeg" alt="About This Tool" className="about-image" />
</section>

{/* Find Your Path Section */}
<section
  className="find-your-path-section"
>
  <div style={{ textAlign: "center" }}>
    <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", marginBottom: "clamp(20px, 2vw, 40px)" }}>Find Your Path</h2>
    <div
      style={{
        width: "70%", 
        maxWidth: "1000px",
        height: "2px",
        backgroundColor: "#000",
        margin: "0 auto",
      }}
    />
  </div>

  {/* Spheres of Interest section */}
  <div className="spheres-wrapper">
    <SpheresOfInterest />
  </div>

  {/* Career Paths section */}
  <div
    style={{
      position: "absolute",
      top: "clamp(550px, 100vw, 1050px)", 
      left: "50%",
      transform: "translateX(-50%)",
      width: "1800px",
    }}
  >
    <CareerPaths />
  </div>
</section>

      {/* Call to Action */}
      <div style={{
        backgroundColor: "#edfcff"
      }}>
      <img src="/trees.png" alt="trees" className="full-width-image"/>
      </div>
      <section className="call-to-action">
      <h2>Ready to Find Your Path?</h2>
        <Link to="/survey">
          <button className="survey-button">Take the Survey →</button>
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
        <Route path="/career/:careerId" element={<CareerDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
