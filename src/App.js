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

      {/* Find Your Path Section */}
      <section style={{ paddingTop: "50px", paddingBottom: "200px", width: "100%", backgroundColor: "#D7CBCB"}}>
  {/* Centered Header */}
  <h2 style={{ fontSize: "4rem", marginBottom: "10px", textAlign: "center" }}>Find Your Path</h2>

  {/* Flexbox for Left (Circles) & Right (Text Box) */}
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1200px", margin: "0 auto" }}>
    
    {/* Left Section - Circles */}
    <div style={{ flex: "1", textAlign: "right" }}>
      <div style={{ marginLeft: "-150px", marginBottom: "100px" }}> 
        <SpheresOfInterest />
      </div>
    </div>

    {/* Right Section - Text Box */}
    <div style={{ flex: "1", borderRadius: "50px", maxWidth: "500px", minHeight: "500px"}}>
    <h3 style={{ fontSize: "3rem", margin: "20px 0"}}>Spheres of Interest</h3>
      <p style={{ fontSize: "2rem", color: "#311106"}}>
        Rather than the type of career, these spheres of interest describe the kinds of fields careers are situated in. Hover over each circle to learn more about the various spheres of interest for nature conservation careers. *This will populate with corresponding description of circle when hovered.
      </p>
    </div>

  </div>

  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1200px", margin: "0 auto" }}>
    
  <div style={{ flex: "1", borderRadius: "50px", marginLeft: "-50px", maxWidth: "500px", minHeight: "500px"}}>
    <h3 style={{ fontSize: "3rem", margin: "20px 0", paddingTop: "50px",}}>Career Paths</h3>
      <p style={{ fontSize: "2rem", color: "#311106"}}>
        In addition to spheres of interest, nature conservation careers cover a wide variety of career categories. These categories describe the kind of job, point more towards the educational experience and skills required. Hover over each circle to learn more about the various career paths for nature conservation careers. *This will populate with corresponding description of circle when hovered.
      </p>
    </div>

    {/* Left Section - Circles */}
    <div style={{ flex: "1", textAlign: "left" }}>
      <div style={{ marginLeft: "150px", marginBottom: "100px" }}> 
        <CareerPaths/>
      </div>
    </div>

  </div>
</section>



      {/* Indigenous Values Section */}
      <section style={{ padding: "20px", background: "#f1f1f1", }}>
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
