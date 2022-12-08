import React from "react";
import "./SliderDescription.css";

interface SliderDescriptionProps {}

export const SliderDescription: React.FC<SliderDescriptionProps> = ({}) => {
  return (
    <>
      <div className="slider-description">
        Below is an interactive graphic representing the{" "}
        <span className="salmon-text"> price </span>increase of salmon based on
        the<span className="salmon-text"> salmon's color</span>. Price may vary
        based on location, time, exact amounts of astaxanthin used, and other
        factors.
      </div>
    </>
  );
};
