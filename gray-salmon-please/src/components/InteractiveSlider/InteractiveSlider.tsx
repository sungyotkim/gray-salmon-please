import React from "react";
import "./InteractiveSlider.css";
import { SliderDescription } from "./SliderDescription/SliderDescription";
import { SliderImage } from "./SliderImage/SliderImage";
import { SliderComponent } from "./SliderComponent/SliderComponent";
import { SliderTable } from "./SliderTable/SliderTable";

interface InteractiveSliderProps {}

export const InteractiveSlider: React.FC<InteractiveSliderProps> = ({}) => {
  return (
    <>
      <SliderDescription />
      <div className="interactive-slider-container">
        <div className="interactive-slider-left">
          <SliderImage />
          <SliderComponent />
        </div>
        <div className="interactive-slider-right">
          <SliderTable />
        </div>
      </div>
    </>
  );
};
