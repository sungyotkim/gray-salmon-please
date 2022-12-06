import React from "react";
import "./SliderComponent.css";
import { sliderColors } from "../../../utils/sliderData";

interface SliderComponentProps {
  sliderColor: string;
  setSliderColor: React.Dispatch<React.SetStateAction<string>>;
  sliderCost: number;
  setSliderCost: React.Dispatch<React.SetStateAction<number>>;
}

export const SliderComponent: React.FC<SliderComponentProps> = ({
  sliderColor,
  setSliderColor,
  sliderCost,
  setSliderCost,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    let value = parseInt(e.target.value);
    setSliderCost(value);

    let index = value - 20;
    setSliderColor(sliderColors[index]);
  };

  return (
    <>
      <div className="slider-component-wrapper">
        <input
          type="range"
          min="20"
          max="34"
          value={sliderCost}
          className="slider"
          onChange={handleChange}
        />
      </div>
    </>
  );
};
