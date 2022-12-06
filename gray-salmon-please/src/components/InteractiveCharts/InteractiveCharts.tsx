import React from "react";
import { BarChart } from "./BarChart/BarChart";
import { BarChartInfo } from "./BarChartInfo/BarChartInfo";

interface InteractiveChartsProps {}

export const InteractiveCharts: React.FC<InteractiveChartsProps> = ({}) => {
  return (
    <>
      <BarChartInfo />
      <div className="charts-container">
        <BarChart />
      </div>
    </>
  );
};
