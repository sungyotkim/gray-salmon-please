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
import { dataBeforeInfo, dataAfterInfo } from "../../../utils/chartData";
import { WindowSizeContext } from "../../../context/WindowSizeContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {}

const labels = dataBeforeInfo.map((row) => row.color);

export const BarChart: React.FC<BarChartProps> = ({}) => {
  const { darkMode } = useContext(DarkModeContext);
  const [gridLineColor, setGridLineColor] = useState("rgba(70,70,70,0.75)");
  const [gridColor, setGridColor] = useState("#000000");
  const { windowWidth } = useContext(WindowSizeContext);

  useEffect(() => {
    if (darkMode) {
      setGridLineColor("rgba(196, 196, 196, 0.45");
      setGridColor("#F0EAD6");
    } else {
      setGridLineColor("rgba(70,70,70,0.35)");
      setGridColor("#000000");
    }

    return () => {
      setGridLineColor("rgba(70,70,70,0.35)");
      setGridColor("#000000");
    };
  }, [darkMode]);

  useEffect(() => {}, [windowWidth]);

  const options = {
    responsive: true,
    layout: {
      padding: 5,
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Consumer's Willingness To Pay Per kg of Salmon",
        font: {
          size: 20,
          weight: "600",
          family: "Inter, Avenir, Helvetica, Arial, sans-serif",
        },
        color: gridColor,
      },
    },
    color: gridColor,
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
          color: gridColor,
        },
        grid: {
          color: gridLineColor,
        },
        ticks: {
          color: gridColor,
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
          color: gridColor,
        },
        grid: {
          color: gridLineColor,
        },
        ticks: {
          color: gridColor,
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
        color: gridColor,
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
        color: gridColor,
        borderColor: gridColor,
        borderWidth: 1.5,
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
