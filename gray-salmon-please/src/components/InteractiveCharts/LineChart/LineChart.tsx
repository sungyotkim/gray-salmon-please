import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
    },
    title: {
      display: true,
      text: "Line Chart test",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
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
    },
    {
      label: "After Information",
      data: dataAfterInfo.map((row) => row.usd),
    },
  ],
};

export const LineChart: React.FC<LineChartProps> = ({}) => {
  return (
    <>
      <div className="chart-wrapper">
        <Line options={options} data={data} />
      </div>
    </>
  );
};
