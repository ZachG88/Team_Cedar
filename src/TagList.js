import React from "react";
import { Link } from "react-router-dom";
import { categoryColors } from "./CategoryColors";
import { Tooltip } from "react-tooltip";

const TagList = ({ categories = [] }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1vw",
        paddingBottom: "1vw",
        alignItems: "center",
      }}
    >
      {categories.map((category, index) => (
        <Link
          key={index}
          to="/#find-your-path"
          style={{ textDecoration: "none" }}
        >
          <span
            style={{
              backgroundColor: categoryColors[category] || "#ccc",
              color: "white",
              padding: "0.2rem 0.4rem",
              borderRadius: "8px",
              fontSize: "1.3vw",
              fontWeight: 500,
              fontFamily: "Nunito, sans-serif",
              whiteSpace: "nowrap",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
            }}
          >
            {category}
          </span>
        </Link>
      ))}

      {/* Tooltip Icon */}
      <span
        data-tooltip-content="These tags indicate the career categories related to this job.<br />Click on them to learn more."
        data-tooltip-id="card-tooltip"
        data-tooltip-place="bottom"
        style={{
          color: "white",
          fontWeight: "bold",
          cursor: "help",
          fontSize: "1.3vw",
          backgroundColor: "#888",
          borderRadius: "50%",
          width: "1.5vw",
          height: "1.5vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: 1,
        }}
      >
        ?
      </span>

      <Tooltip
        id="card-tooltip"
        className="custom-tooltip"
        html="These tags indicate the career categories related to this job.<br />Click on them to learn more."
      />
    </div>
  );
};

export default TagList;
