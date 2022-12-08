import React, { useContext, useEffect } from "react";
import "./SliderTable.css";
import { sliderCosts } from "../../../utils/sliderData";
import { DarkModeContext } from "../../../context/DarkModeContext";

interface SliderTableProps {
  sliderCost: number;
}

export const SliderTable: React.FC<SliderTableProps> = ({ sliderCost }) => {
  const { darkMode } = useContext(DarkModeContext);
  const sliderTableElement = document.getElementById("slider-table");

  useEffect(() => {
    if (darkMode && sliderTableElement) {
      sliderTableElement.style.setProperty("--tableColor", "#767c7c");
    }
  }, [darkMode]);

  return (
    <>
      <div
        className={
          darkMode
            ? "slider-table-wrapper slider-table-text-dark"
            : "slider-table-wrapper"
        }
        id="slider-table"
      >
        <div className="slider-table-title">Estimated market price</div>
        <div className="slider-table-main bold-text">
          ${sliderCosts[sliderCost - 20]}
        </div>
        <div className="slider-table-footer">per lb of salmon</div>
      </div>
    </>
  );
};
