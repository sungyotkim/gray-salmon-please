import React, { useContext, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./BarChart.css";
import { DarkModeContext } from "../../../context/DarkModeContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {}

const dataBeforeInfo = [
  { color: "R21", usd: 7.66 },
  { color: "R23", usd: 27.85 },
  { color: "R25", usd: 30.41 },
  { color: "R27", usd: 29.66 },
  { color: "R29", usd: 34.87 },
];

const dataAfterInfo = [
  { color: "R21", usd: 8.57 },
  { color: "R23", usd: 25.0 },
  { color: "R25", usd: 30.65 },
  { color: "R27", usd: 36.95 },
  { color: "R29", usd: 28.46 },
];

const labels = dataBeforeInfo.map((row) => row.color);

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "Before Information",
//       data: dataBeforeInfo.map((row) => row.usd),
//       backgroundColor: ["#f9a28d", "#f2917b", "#f38166", "#f46b4c", "#f2562e"],
//     },
//     {
//       label: "After Information",
//       data: dataAfterInfo.map((row) => row.usd),
//       backgroundColor: ["#f9a28d", "#f2917b", "#f38166", "#f46b4c", "#f2562e"],
//     },
//   ],
// };

export const BarChart: React.FC<BarChartProps> = ({}) => {
  const { darkMode } = useContext(DarkModeContext);
  const [gridLineColor, setGridLineColor] = useState("#000000");

  useEffect(() => {
    if (darkMode) {
      setGridLineColor("#F0EAD6");
    } else {
      setGridLineColor("#000000");
    }

    return () => {
      setGridLineColor("#000000");
    };
  }, [darkMode]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
      },
      title: {
        display: true,
        text: "Consumer's Willingness To Pay Per kg of Salmon",
        font: {
          size: 20,
          weight: "600",
          family: "Inter, Avenir, Helvetica, Arial, sans-serif",
        },
        color: gridLineColor,
      },
    },
    color: gridLineColor,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "$USD per kg",
          font: {
            size: 16,
            weight: "600",
            family: "Inter, Avenir, Helvetica, Arial, sans-serif",
          },
          color: gridLineColor,
        },
        grid: {
          color: gridLineColor,
        },
        ticks: {
          color: gridLineColor,
        },
      },
      x: {
        title: {
          display: true,
          text: "Salmon Color",
          font: {
            size: 16,
            weight: "600",
            family: "Inter, Avenir, Helvetica, Arial, sans-serif",
          },
          color: gridLineColor,
        },
        grid: {
          color: gridLineColor,
        },
        ticks: {
          color: gridLineColor,
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Before Information",
        data: dataBeforeInfo.map((row) => row.usd),
        backgroundColor: [
          "#f9a28d",
          "#f2917b",
          "#f38166",
          "#f46b4c",
          "#f2562e",
        ],
        color: gridLineColor,
      },
      {
        label: "After Information",
        data: dataAfterInfo.map((row) => row.usd),
        backgroundColor: [
          "#f9a28d",
          "#f2917b",
          "#f38166",
          "#f46b4c",
          "#f2562e",
        ],
        color: gridLineColor,
      },
    ],
  };

  return (
    <>
      <div className="chart-wrapper">
        <Bar options={options} data={data} />
      </div>
    </>
  );
};
