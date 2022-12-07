import React from "react";
import "./ClosingBody.css";

interface ClosingBodyProps {}

export const ClosingBody: React.FC<ClosingBodyProps> = ({}) => {
  return (
    <>
      <div className="closing-body-container">
        <h2>So what do consumers want?</h2>
        <div>
          <p>
            Some argue superiority in flavor and texture of wild salmon over
            farmed salmon. Others say there's no clear difference in taste
            between the two.
          </p>
          <br />
          <p>
            Regarding farmed salmon, the
            <span className="salmon-text"> astaxanthin</span> additive{" "}
            <span className="bold-text">does not </span>
            contribute to flavor differences. In other words, aesthetics is the
            main difference in price, all other things (species, size, weight)
            equal.
          </p>
          <br />
          <p>
            Assuming no major difference in taste between wild and farmed
            salmon, if consumers would rather save money by buying farmed salmon
            over wild salmon, why not forego the expensive pigments and consider
            selling <span className="bold-text">cheaper, gray</span> salmon
            instead?
          </p>
          <br />
          <p>
            P.S. If you are a farmer or know of one, please reach out to me and
            sell me gray salmon.
          </p>
        </div>
        <h3>Would you try gray salmon?</h3>
      </div>
    </>
  );
};
