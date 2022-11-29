import React, { useState } from "react";
import "./ColorExplanation.css";

interface ColorExplanationProps {}

export const ColorExplanation: React.FC<ColorExplanationProps> = ({}) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  return (
    <>
      <div className="color-explanation-container">
        <h2>
          What causes their <span className="salmon-text">color</span>?
        </h2>
        <div>
          <p>
            Wild salmon, due to their diet of{" "}
            <span className="salmon-text">astaxanthin</span>-containing{" "}
            <span
              className="color-explanation-text-hover underline-text"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              krill and shrimp
              {hovered && (
                <div className="hovered-text-body">
                  Fun fact:
                  <br />A flamingo's high{" "}
                  <span className="salmon-text">shrimp</span> diet is also what
                  contributes to the its{" "}
                  <span className="salmon-text">pink color</span>!
                </div>
              )}
            </span>
            , achieve the <span className="salmon-text">orange-pink</span> hue
            naturally.
          </p>
          <br />
          <p>
            Farmed salmon, on the other hand, are naturally{" "}
            <span className="bold-text">gray</span> and only by adding{" "}
            <span className="salmon-text">astaxanthin</span> are farmers able to
            replicate the natural{" "}
            <span className="salmon-text">salmon color</span>.
          </p>
          <br />
          <p>
            <span className="salmon-text">Astaxanthin</span> can be made
            naturally through algae and pulverized crustaceans or synthesized in
            a lab using petrochemicals.
          </p>
          <br />
          <p>
            These pigmenting supplements are the{" "}
            <span className="salmon-text">most expensive</span> component of the
            farmed salmon's diet, consisting of{" "}
            <span className="salmon-text bold-text">up to 20%</span> of feed
            costs!
          </p>
        </div>
      </div>
    </>
  );
};
