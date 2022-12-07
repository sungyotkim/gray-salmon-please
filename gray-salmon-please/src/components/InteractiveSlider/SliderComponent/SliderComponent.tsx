import React, { useContext, useState } from "react";
import "./SliderComponent.css";
import { sliderColors } from "../../../utils/sliderData";
import { DarkModeContext } from "../../../context/DarkModeContext";

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
  const { darkMode } = useContext(DarkModeContext);
  const [sliderDistance, setSliderDistance] = useState<string>("2px");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    let value = parseInt(e.target.value);
    setSliderCost(value);

    let index = value - 20;
    setSliderColor(sliderColors[index]);

    const sliderElement = document.getElementById("myRange");

    if (sliderElement) {
      sliderElement.style.setProperty("--sliderThumbBackground", sliderColor);
    }

    let distance = ((value - 20) * 100) / 14;
    let newPosition = -distance * 0.215;

    if (value < 25) newPosition += 2;
    if (value > 30) newPosition -= 2;

    setSliderDistance(`calc(${distance}% + ${newPosition}px)`);
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
          id="myRange"
          name="slider"
        />
        <label
          htmlFor="slider"
          className={
            darkMode ? "slider-label slider-label-dark" : "slider-label"
          }
        >
          Salmon Color Score
        </label>
        <div className="slider-value" style={{ left: sliderDistance }}>
          {sliderCost}
        </div>
      </div>
    </>
  );
};
