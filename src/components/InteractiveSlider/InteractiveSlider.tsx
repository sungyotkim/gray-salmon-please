import React, { useContext, useState } from "react";
import "./InteractiveSlider.css";
import { SliderDescription } from "./SliderDescription/SliderDescription";
import { SliderImage } from "./SliderImage/SliderImage";
import { SliderComponent } from "./SliderComponent/SliderComponent";
import { SliderTable } from "./SliderTable/SliderTable";
import { DarkModeContext } from "../../context/DarkModeContext";

interface InteractiveSliderProps {}

export const InteractiveSlider: React.FC<InteractiveSliderProps> = ({}) => {
  const [sliderColor, setSliderColor] = useState<string>("#dc2325");
  const [sliderCost, setSliderCost] = useState<number>(34);
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <SliderDescription />
      <div
        className={
          darkMode
            ? "interactive-slider-title"
            : "interactive-slider-title interactive-slider-title-light"
        }
      >
        Salmon Color Price Estimator
      </div>
      <div className="interactive-slider-container">
        <div className="interactive-slider-left">
          <SliderImage sliderColor={sliderColor} />
          <SliderComponent
            sliderColor={sliderColor}
            setSliderColor={setSliderColor}
            sliderCost={sliderCost}
            setSliderCost={setSliderCost}
          />
        </div>
        <div className="interactive-slider-right">
          <SliderTable sliderCost={sliderCost} />
        </div>
      </div>
    </>
  );
};
