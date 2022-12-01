import React from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
    },
    title: {
      display: true,
      text: "Consumer's Willingness To Pay Per kg of Salmon",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "$USD per kg",
      },
    },
    x: {
      title: {
        display: true,
        text: "Salmon Color",
      },
    },
  },
};

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

export const data = {
  labels,
  datasets: [
    {
      label: "Before Information",
      data: dataBeforeInfo.map((row) => row.usd),
      backgroundColor: ["#f9a28d", "#f2917b", "#f38166", "#f46b4c", "#f2562e"],
    },
    {
      label: "After Information",
      data: dataAfterInfo.map((row) => row.usd),
      // backgroundColor: ["#ee967a", "#f58672", "#f1755a", "#f16047", "#f3492d"],
      backgroundColor: ["#f9a28d", "#f2917b", "#f38166", "#f46b4c", "#f2562e"],
    },
  ],
};

export const BarChart: React.FC<BarChartProps> = ({}) => {
  return (
    <>
      <div className="chart-wrapper">
        <Bar options={options} data={data} />
      </div>
    </>
  );
};
