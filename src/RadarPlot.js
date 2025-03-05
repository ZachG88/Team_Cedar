import React, { useEffect } from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";

// Registering required components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = ({ userVector, careerMatches }) => {
  // 5D user vector data from the survey response
  // Example: userVector = [0.3, 0.5, 0.7, 0.4, 0.8]
  const data = {
    labels: [
      "Water and Fisheries",
      "Forests, Land, and Wildlife",
      "Government, Law, and Treaty Protection",
      "Cultural and Tribal Resources",
      "Data and Technology",
    ],
    datasets: [
      {
        label: "Your Preferences",
        data: userVector, // Pass the user vector as data
        backgroundColor: "rgba(50, 54, 132, 0.24)",
        borderColor: "rgb(27, 68, 95)",
        borderWidth: 2,
        pointBackgroundColor: "rgb(27, 68, 95)",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 5,
      },
      ...careerMatches.map((career, index) => ({
        label: career.title,
        data: career.vector,
        borderColor: `rgba(${(index + 1) * 50}, ${(index + 1) * 100}, ${(index + 1) * 150}, 1)`,
        backgroundColor: `rgba(${(index + 1) * 50}, ${(index + 1) * 100}, ${(index + 1) * 150}, 0.2)`,
        borderWidth: 1,
        pointBackgroundColor: `rgba(${(index + 1) * 50}, ${(index + 1) * 100}, ${(index + 1) * 150}, 1)`,
        pointBorderColor: "#fff",
        pointRadius: 5,
      }))
    ],
  };

  const options = {
    scales: {
      r: {
        min: 0, // Minimum value for the radar chart axis
        max: 1, // Maximum value for the radar chart axis (assuming the survey scale is 0-1)
        ticks: {
          stepSize: 0.2,
        },
      },
    },
    responsive: true,
    plugins: {
      tooltip: {
        mode: "nearest",
        intersect: false,
      },
      legend: {
        position: "top",
        labels: {
          color: "#222", // Darker text
          flexDirection: "column",
          font: { size: 20, weight: "bold" },
          boxWidth: 15, // Adjust legend box size
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", margin: "auto", paddingTop: "50px" }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
