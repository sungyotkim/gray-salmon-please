import React from "react";
import "./InteractiveCharts.css";
import { LineChart } from "./LineChart/LineChart";

interface InteractiveChartsProps {}

export const InteractiveCharts: React.FC<InteractiveChartsProps> = ({}) => {
  return (
    <>
      {/* <div id="acquisitions"></div> */}
      <div className="charts-container">
        <LineChart />
      </div>
    </>
  );
};
