import { Link } from "react-router-dom";

const OurTeam = () => {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Our Team</h1>
        <p>Team members:</p>
        <ul>
          <li> Member 1</li>
          <li> Member 2</li>
          <li> Member 3</li>
          <li> Member 4</li>
          <li> Member 5</li>
        </ul>
        <Link to="/">Back to Home</Link>
      </div>
    );
  };

export default OurTeam;