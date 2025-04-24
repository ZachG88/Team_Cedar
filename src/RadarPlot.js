import React, { useEffect } from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";

// Registering required components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = ({ userVector, careerMatches }) => {
  // 5D user vector data from the survey response
  // Example: userVector = [0.3, 0.5, 0.7, 0.4, 0.8]
  const scaledUserVector = userVector.map((val) => val / 4);
  const labels = [
    "Water and Fisheries",
    "Forests, Land, and Wildlife",
    "Government, Law, and Treaty Protection",
    "Cultural and Tribal Resources",
    "Data and Technology",
  ];

  const sphereColorsRGBA = {
    "Water and Fisheries": {
      fill: "rgba(140, 176, 188, 0.25)",
      border: "rgba(140, 176, 188, 1)",
    },
    "Forests, Land, and Wildlife": {
      fill: "rgba(98, 121, 67, 0.25)",
      border: "rgba(98, 121, 67, 1)",
    },
    "Government, Law, and Treaty Protection": {
      fill: "rgba(159, 144, 162, 0.25)",
      border: "rgba(159, 144, 162, 1)",
    },
    "Cultural and Tribal Resources": {
      fill: "rgba(172, 182, 89, 0.25)",
      border: "rgba(172, 182, 89, 1)",
    },
    "Data and Technology": {
      fill: "rgba(54, 80, 93, 0.25)",
      border: "rgba(54, 80, 93, 1)",
    },
  };

  const topIndex = userVector.indexOf(Math.max(...userVector));
  const topSphere = labels[topIndex];
  const { fill, border } = sphereColorsRGBA[topSphere];

  const data = {
    labels,
    datasets: [
      {
        label: "Your Preferences",
        data: scaledUserVector, // Pass the user vector as data
        backgroundColor: fill,
        borderColor: border,
        borderWidth: 2,
        pointBackgroundColor: fill,
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 5,
      },
      ...careerMatches.map((career, index) => ({
        label: career.title,
        data: career.vector,
        borderColor: `rgba(${(index + 1) * 83}, ${(index + 1) * 102}, ${(index + 1) * 57}, 1)`,
        backgroundColor: `rgba(${(index + 1) * 83}, ${(index + 1) * 102}, ${(index + 1) * 57}, 0.2)`,
        borderWidth: 1,
        pointBackgroundColor: `rgba(${(index + 1) * 83}, ${(index + 1) * 102}, ${(index + 1) * 57}, 1)`,
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
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        mode: "nearest",
        intersect: false,
      },
      legend: {
        position: "bottom",
        labels: {
          color: "#222", // Darker text
          flexDirection: "column",
          font: { size: "13vw", weight: "bold" },
          boxWidth: 15, // Adjust legend box size
        },
      },
    },
  };

  return (
    <div
  style={{
    width: "100%",
    maxWidth: "900px",
    height: "45vw",
    padding: "1em",
  }}
>
  <Radar data={data} options={options} />
</div>
  );
};

export default RadarChart;
