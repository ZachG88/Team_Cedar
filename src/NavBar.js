import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <nav >
            {/* Left side links */}
            <div className="nav-links">
                <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
                <Link to="/survey" style={{ marginRight: "15px" }}>Survey</Link>
                <Link to="/explore" style={{ marginRight: "15px" }}>Explore</Link>
            </div>

            {/* Right-aligned external link */}
            <div  className="right-links">
                <Link to="/about"style={{ marginRight: "15px" }}>About</Link>
                <a href="https://nwifc.org/" target="_blank" rel="noopener noreferrer">NWIFC Website</a>         
            </div>
        </nav>
    );
};

export default Nav;

