import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <nav style={{ padding: "10px", background: "#eee", marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
        <Link to="/survey" style={{ marginRight: "15px" }}>Survey</Link>
        <Link to="/resources" style={{ marginRight: "15px" }}>Resources</Link>
        <Link to="/values">Indigenous Values</Link>
        </nav>
    );
};

export default Nav;