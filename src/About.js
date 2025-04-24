import { Link } from "react-router-dom";
import teamMembers from "./Team";


const About = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <h2>About the Project</h2>
        <p>
          The Natural Conservation Career Explorer is designed to guide Indigenous youth toward careers in environmental conservation. 
          This tool helps individuals explore their passions and align them with potential career pathways.
        </p>
      </section>

      <section className="about-section about-sponsors">
        <h2>About our Sponsors</h2>
        <p>
          This initiative is supported by organizations dedicated to Indigenous career development and conservation efforts.
        </p>

        <div className="sponsor-container">
          {/* NOAA Section */}
          <div className="sponsor">
            <img src="/NOAA-logo.png" alt="NOAA Logo" className="sponsor-logo" />
            <div className="sponsor-info">
              <h3>National Oceanic and Atmospheric Administration (NOAA)</h3>
              <p>
                NOAA is committed to understanding and conserving our oceans and atmosphere. Through scientific research and education,
                NOAA supports sustainable resource management and environmental stewardship.
              </p>
              <a href="https://www.noaa.gov/" target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </div>
          </div>

          {/* NWIFC Section */}
          <div className="sponsor" style={{paddingTop: "9px"}}>
            <img src="/NWIFC-logo.png" alt="NWIFC Logo" className="sponsor-logo" />
            <div className="sponsor-info">
              <h3>Northwest Indian Fisheries Commission (NWIFC)</h3>
              <p>
                NWIFC provides support to 20 treaty Indian tribes in western Washington as they manage fisheries and natural resources. 
                Their work ensures sustainable practices while upholding tribal sovereignty.
              </p>
              <a href="https://nwifc.org/" target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section-team">
        <h2>Project Built By: </h2>
        <img src="/teamCedarLogo.png" alt="NWIFC Logo" className="sponsor-logo" />
        <p style={{maxWidth: "55vw", margin: "0 auto" }}>
          2025 University of Washington iSchool Informatics Capstone team and passionate individuals committed to environmental stewardship and Indigenous empowerment. 
        </p>

        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div className={`team-member sphere-${index % 5}`} key={index}>
              <img src={member.image} alt={member.name} className="team-photo" />
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;