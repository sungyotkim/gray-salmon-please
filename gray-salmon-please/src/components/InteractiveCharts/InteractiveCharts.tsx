import React from "react";
import "./InteractiveCharts.css";
import { BarChart } from "./BarChart/BarChart";

interface InteractiveChartsProps {}

export const InteractiveCharts: React.FC<InteractiveChartsProps> = ({}) => {
  return (
    <>
      {/* <div id="acquisitions"></div> */}
      <div className="charts-container">
        <BarChart />
      </div>
    </>
  );
};
