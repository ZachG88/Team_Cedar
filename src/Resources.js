import React from "react";

const resources = [
  {
    Organization: "Bureau of Labor Statistics",
    Link: "https://www.bls.gov/emp/tables/education-and-training-by-occupation.htm",
    Details: "Education/training by occupation. Most scientific fields covered.",
  },
  {
    Organization: "U.S. Office of Personnel Management",
    Link: "https://www.opm.gov/policy-data-oversight/classification-qualifications/general-schedule-qualification-policies/",
    Details: "Specifics/guidelines for government jobs.",
  },
  {
    Organization: "Washington State Office of Financial Management",
    Link: "https://ofm.wa.gov/state-human-resources/compensation-job-classification",
    Details: "Search 'fish' etc. for relevant career paths in Washington state.",
  },
  {
    Organization: "AG careers",
    Link: "https://www.agcareers.com/career-profiles",
    Details: "Fisheries technician, biologist, etc. related to food and environmental sciences.",
  },
  {
    Organization: "Environmental Science - Green jobs info site",
    Link: "https://www.environmentalscience.org/careers",
    Details: "Various environmental science career paths and job opportunities.",
  },
  {
    Organization: "AISES - Jobs in STEM board",
    Link: "https://careers.aises.org/",
    Details: "",
  },
  {
    Organization: "NAFWS - Jobs board",
    Link: "https://www.nafws.org/resources/jobs/",
    Details: "",
  },
  {
    Organization: "U.S. Department of the Interior",
    Link: "https://careers.doi.gov/explore-careers",
    Details: "",
  },
  // Add more resources as needed
];

const Resources = () => {
  return (
    <div className="resources-container">
      <section className="resources-section">
        <h2>Resource Links for Career Exploration</h2>
        <p>
          Explore the following resources for guidance on careers in environmental conservation, job boards, and relevant career development tools.
        </p>
      </section>

      <section className="resources-list">
        {resources.map((resource, index) => (
          <div className="resource-card" key={index}>
            <h3>{resource.Organization}</h3>
            <p>{resource.Details}</p>
            <a href={resource.Link} target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Resources;
