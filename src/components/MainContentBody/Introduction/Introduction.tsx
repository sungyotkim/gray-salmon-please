import "./Introduction.css";
import React from "react";
import salmonFillet from "../../../assets/salmon-fillet.jpeg";

interface IntroductionProps {}

export const Introduction: React.FC<IntroductionProps> = ({}) => {
  return (
    <>
      <div className="introduction-container">
        <div className="introduction-text-container">
          <h2>Did you know?</h2>
          <p>
            Farmed salmon is naturally <span className="bold-text">gray!</span>
            <br />
            The classic <span className="salmon-text">salmon color</span> is
            only natural to <span className="salmon-text">wild salmon</span>.
          </p>
        </div>
        <div className="introduction-hero-container">
          <img src={salmonFillet} alt="salmon-fillet" id="introduction-hero" />
        </div>
      </div>
    </>
  );
};
