import React, { useState } from "react";
import './App.css';

const bars = [
  {
    id: 1,
    name: "Directors and Leaders",
    color: "#7f7782",
    description:
      "These roles involve overseeing organizations, programs, and initiatives focused on conservation, natural resource management, and Indigenous environmental stewardship. Leadership positions require strong decision-making, strategic planning, and communication skills. Many leaders have backgrounds in environmental science, public administration, or business management, often with advanced degrees and years of experience in the field. Careers include Fisheries/Wildlife Director, NWIFC Commissioner, and Tribal Chair.",
  },
  {
    id: 2,
    name: "Policy, Planning, and Management",
    color: "#4b7989",
    description:
      "Professionals in this category develop policies, manage natural resources, and coordinate conservation projects at the tribal, local, and national levels. They analyze environmental laws, land-use plans, and treaty rights to ensure sustainable and culturally appropriate practices. A background in environmental policy, law, public administration, or resource management is common, with strong skills in research, negotiation, and regulatory compliance. Careers include Environmental Policy Analyst, Habitat Program Manager, and Cultural Resources Advocate.",
  },
  {
    id: 3,
    name: "Scientific and Technical Specialists",
    color: "#acb65a",
    description:
      "These careers focus on research, data analysis, and applied science to address environmental challenges. Specialists may study ecosystems, track wildlife populations, assess climate impacts, or develop sustainable solutions for land and water use. Many roles require degrees in biology, ecology, hydrology, or environmental science, along with skills in critical thinking, data modeling, and scientific communication. Careers include Fisheries Biologist,Wildlife Biologist, Climate Scientist, and GIS/Data Management Specialist.",
  },
  {
    id: 4,
    name: "Technicians and Field Support",
    color: "#36505d",
    description:
      "Technicians play a hands-on role in conservation by collecting data, monitoring environmental conditions, and assisting scientists and land managers. These roles often require technical certifications or associate’s degrees in environmental science, forestry, or fisheries, along with field skills like GPS navigation, species identification, and water quality testing. Careers include Hatchery Technician, Water Quality Technician, and Habitat Technician.",
  },
  {
    id: 5,
    name: "Conservation and Restoration",
    color: "#8cb0bc",
    description:
      "These careers focus on restoring natural habitats, managing land and water resources, and implementing sustainable practices. Professionals in this field may work on reforestation projects, invasive species removal, or ecological restoration using both western scientific methods and traditional Indigenous knowledge. Education varies from hands-on experience to degrees in environmental science, ecology, or conservation biology. Careers include Forest and Conservation Program Manager, Restoration Ecologist, and Restoration Crew Lead.",
  },
  {
    id: 6,
    name: "Enforcement and Advocacy",
    color: "#627943",
    description:
      "These roles involve protecting natural resources, enforcing environmental laws, and advocating for Indigenous environmental rights. They may include legal work, environmental justice efforts, or natural resource law enforcement. Many professionals in this field have backgrounds in law, criminal justice, or environmental policy, with skills in investigation, conflict resolution, and treaty law. Careers include Fisheries Enforcement Officer, Treaty Protection Advocate, and Harvest Monitor.",
  },
  {
    id: 7,
    name: "Outreach and Administrative Support",
    color: "#9f90a2",
    description:
      "These roles focus on education, communication, and program coordination to support conservation efforts. Professionals in this category work in public outreach and education, helping to bridge traditional knowledge and western scientific research with community engagement. Strong writing, public speaking, and organizational skills are essential, with backgrounds in environmental studies, education, or communications. Careers include Environmental Outreach and Education Coordinator, Environmental Education Specialist, Public Information Officer, and Natural Resources Administrative Assistant.",
  },
];

const CareerPaths = () => {
  const [hoveredBar, setHoveredBar] = useState(null);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        maxWidth: "clamp(50px, 85vw, 1200px)",
        margin: "0 auto",
      }}
    >
      <div style={{ flex: "1.5", marginRight: "30px", marginTop: "-22px"}}>
        <h3 style={{ fontSize: "clamp(1rem, 3vw, 3rem)", margin: "20px 0" }}>
          {hoveredBar ? hoveredBar.name : "Career Categories"}
        </h3>
        <p style={{ fontSize: "clamp(.5rem, 2vw, 1.5rem)", color: "#311106"}}>
          {hoveredBar
            ? hoveredBar.description
            : "In addition to spheres of interest, nature conservation careers cover a wide variety of career categories. These categories describe the kind of job, point more towards the educational experience and skills required. Hover over each bar to learn more about the various career paths for nature conservation careers."}
        </p>
        {!hoveredBar && (
          <div
            style={{
              color: "#9f90a2",
              display: "flex",
              alignItems: "center",
              marginTop: "-5px"
            }}
          >
            <p className="hover-text-career">
              Hover for more info.
            </p>
          </div>
        )}
      </div>
      <div style={{ flex: "1.7"}}>
        {bars.map((bar) => (
          <Bar
            key={bar.id}
            {...bar}
            hoveredBar={hoveredBar}
            setHoveredBar={setHoveredBar}
          />
        ))}
      </div>
    </div>
  );
};

const Bar = ({ id, name, color, description, hoveredBar, setHoveredBar }) => {
  const isHovered = hoveredBar && hoveredBar.id === id;
  return (
    <div
      onMouseEnter={() => setHoveredBar({ id, name, description })}
      onMouseLeave={() => setHoveredBar(null)}
      style={{
        backgroundColor: color,
        borderRadius: "7px",
        paddingTop: "clamp(1px, 1vw, 16px)",
        paddingRight: "clamp(1px, 2vw, 16px)",
        paddingLeft: "clamp(1px, 2vw, 16px)",
        paddingBottom: "clamp(10px, 1.5vw, 16px)",
        margin: "8px",
        transition: "all 0.2s ease",
        boxShadow: isHovered ? "0 4px 8px rgba(0,0,0,0.3)" : "none",
        cursor: "pointer",
      }}
    >
      <span
        style={{ color: "white", fontSize: "clamp(7px, 1.5vw, 20px)", fontWeight: "bold" }}
      >
        {name}
      </span>
    </div>
  );
};

export default CareerPaths;
