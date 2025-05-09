import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <nav >
            {/* Left side links */}
            <div className="nav-links">
            <Link to="/about#team-info">
                <img
                    src="/teamCedarLogo.png"
                    alt="Team Cedar Logo"
                    style={{ display: "block", height: "clamp(20px, 8vw, 60px)" }}
                />
            </Link>
                <Link to="/" style={{ marginRight: "15px" }}>
                    <img src="/homeIconNavBar.png" alt="Home" className="nav-icon" />
                    Home
                </Link>
                <Link to="/survey" style={{ marginRight: "15px" }}>
                <img src="/surveyIconNavBar.png" alt="Survey" className="nav-icon" />
                    Survey
                </Link>
                <Link to="/explore" style={{ marginRight: "15px" }}>
                <img src="/worldNavBar.png" alt="Explore" className="nav-icon" />
                    Explore
                </Link>
                <Link to="/resources" style={{ marginRight: "15px" }}>
                <img src="/resourcesIconNavBar.png" alt="Explore" className="nav-icon" />
                    Resources
                </Link>
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

