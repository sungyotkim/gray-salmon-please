import React from "react";
import "./InteractiveCharts.css";
import { BarChart } from "./BarChart/BarChart";
import { BarChartInfo } from "./BarChartInfo/BarChartInfo";

interface InteractiveChartsProps {}

export const InteractiveCharts: React.FC<InteractiveChartsProps> = ({}) => {
  return (
    <>
      {/* <div id="acquisitions"></div> */}
      <BarChartInfo />
      <div className="charts-container">
        <BarChart />
      </div>
    </>
  );
};
