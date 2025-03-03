import React, {useState} from "react";
import { useSpring, animated } from "@react-spring/web";

const spheres = [
    { id: 1, name: "Directors and Leaders", color: "#6A2E2E", description: "These roles involve overseeing organizations, programs, and initiatives focused on conservation, natural resource management, and Indigenous environmental stewardship. Leadership positions require strong decision-making, strategic planning, and communication skills. Many leaders have backgrounds in environmental science, public administration, or business management, often with advanced degrees and years of experience in the field. Careers include Fisheries/Wildlife Director, NWIFC Commissioner, and Tribal Chair." }, 
    { id: 2, name: "Policy, Planning, and Management", color: "#B71C2C", description: "Professionals in this category develop policies, manage natural resources, and coordinate conservation projects at the tribal, local, and national levels. They analyze environmental laws, land use plans, and treaty rights to ensure sustainable and culturally appropriate practices. A background in environmental policy, law, public administration, or resource management is common, with strong skills in research, negotiation, and regulatory compliance. Careers include Environmental Policy Analyst, Habitat Program Manager, and Cultural Resources Advocate." }, 
    { id: 3, name: "Scientific and Technical Specialists", color: "#D15757", description: "These careers focus on research, data analysis, and applied science to address environmental challenges. Specialists may study ecosystems, track wildlife populations, assess climate impacts, or develop sustainable solutions for land and water use. Many roles require degrees in biology, ecology, hydrology, or environmental science, along with skills in critical thinking, data modeling, and scientific communication. Careers include Wildlife Biologist, Climate Scientist, and GIS/Data Management Specialist." }, 
    { id: 4, name: "Technicians and Field Support", color: "#C76C48", description: "Technicians play a hands-on role in conservation by collecting data, monitoring environmental conditions, and assisting scientists and land managers. These roles often require technical certifications or associate’s degrees in environmental science, forestry, or fisheries, along with field skills like GPS navigation, species identification, and water quality testing. Careers include Hatchery Technician, Water Quality Technician, and Geoduck Monitor." },  
    { id: 5, name: "Conservation and Restoration", color: "#9B1323", description: "These careers focus on restoring natural habitats, managing land and water resources, and implementing sustainable practices. Professionals in this field may work on reforestation projects, invasive species removal, or ecological restoration using both scientific methods and traditional Indigenous knowledge. Education varies from hands-on experience to degrees in environmental science, ecology, or conservation biology. Careers include Forest and Conservation Program Manager, Fish Culturist, and Restoration Crew Lead." }, 
    { id: 6, name: "Enforcement and Advocacy", color: "#8A3C3C", description: "These roles involve protecting natural resources, enforcing environmental laws, and advocating for Indigenous environmental rights. They may include legal work, environmental justice efforts, or natural resource law enforcement. Many professionals in this field have backgrounds in law, criminal justice, or environmental policy, with skills in investigation, conflict resolution, and treaty law. Careers include Fisheries Enforcement, Treaty Protection Advocate, and Deputy Chief." }, 
    { id: 7, name: "Outreach and Administrative Support", color: "#A25050", description: "These roles focus on education, communication, and program coordination to support conservation efforts. Professionals in this category work in public outreach and education, helping to bridge traditional knowledge and scientific research with community engagement. Strong writing, public speaking, and organizational skills are essential, with backgrounds in environmental studies, education, or communications. Careers include Environmental Outreach and Education Coordinator and Natural Resources Administrative Assistant." },
  ];
  
  const CareerPaths = () => {
    const [hoveredSphere, setHoveredSphere] = useState(null);

    return (
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1200px", margin: "100px auto" }}>
    
      <div style={{ flex: "1", borderRadius: "50px", marginLeft: "-50px", maxWidth: "500px", minHeight: "500px"}}>
        <h3 style={{ fontSize: "3rem", margin: "20px 0"}}>
        {hoveredSphere ? hoveredSphere.name : "Career Categories"}
      </h3>
        <p style={{ fontSize: "2rem", color: "#311106"}}>
          {hoveredSphere ? hoveredSphere.description : " In addition to spheres of interest, nature conservation careers cover a wide variety of career categories. These categories describe the kind of job, point more towards the educational experience and skills required. Hover over each circle to learn more about the various career paths for nature conservation careers."}
        </p>
      </div>
    <div style={{ flex: "1", textAlign: "left" }}>
      <div style={{ marginLeft: "150px", marginBottom: "100px" }}> 
      <div style={containerStyle}>
            {spheres.map((sphere, index) => (
              <HoverCircle key={sphere.id} index={index} {...sphere} setHoveredSphere={setHoveredSphere} />
            ))}
          </div>
      </div>
    </div>

  </div>
    );
  };
  
  const HoverCircle = ({ name, color, index, description, setHoveredSphere }) => {
    const [hovered, setHovered] = useState(false);
  
    const props = useSpring({
      transform: hovered ? "scale(1.4)" : "scale(1)",
      opacity: hovered ? 1 : 0.7,
      config: { tension: 200, friction: 12 },
    });
  
    return (
      <div
        style={{
          ...circleWrapperStyle,
          top: `${40 + 60 * Math.sin((index / spheres.length) * 2 * Math.PI)}%`,
          left: `${40 + 60 * Math.cos((index / spheres.length) * 2 * Math.PI)}%`,
        }}
        onMouseEnter={() => {
          setHovered(true);
          setHoveredSphere({ name, description });
        }}
        onMouseLeave={() => {
          setHovered(false);
          setHoveredSphere(null);
        }}
      >
        <animated.div
          style={{
            ...circleStyle,
            ...props,
            backgroundColor: color,
          }}
        >
          <span style={textStyle}>{name}</span>
        </animated.div>
      </div>
    );
  };
  
  const circleWrapperStyle = {
    position: "absolute",
    width: "250px",
    height: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  
  const containerStyle = {
    position: "relative",
    width: "400px",
    height: "400px",
  };
  
  const circleStyle = {
    position: "absolute",
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
    cursor: "pointer",
    transition: "transform 0.2s ease-out",
  };
  
  const textStyle = {
    padding: "5px",
  };
  
  export default CareerPaths;