import React from "react";
import "./WhyAddColorExplanation.css";
import salmoFan from "../../../assets/salmofan.png";
import salmoFanLineal from "../../../assets/salmofan-lineal.jpg";

interface WhyAddColorExplanationProps {}

export const WhyAddColorExplanation: React.FC<
  WhyAddColorExplanationProps
> = ({}) => {
  return (
    <>
      <div className="why-add-color-explanation-container">
        <h2>So why use expensive additives?</h2>
        <div className="why-add-color-explanation-main-text">
          <p>
            According to{" "}
            <a
              href="http://www.umb.no/statisk/ior/ferdig.pdf"
              target={"_blank"}
              className="rum-text underline-text"
            >
              industry research from Norwegian University
            </a>
            , consumers associate quality with color and willingness to pay{" "}
            <span className="salmon-text">increases for darker shades</span> of
            salmon but decreases for lighter shades of salmon. In fact, salmon
            colored <span className="bold-text"> lower than 23 </span> on
            SalmoFan (see below) are difficult to sell{" "}
            <span className="bold-text">at any price </span>.
          </p>
        </div>
        <h3>SalmoFan</h3>
        <div className="why-add-color-explanation-salmofan-text">
          <p>
            The{" "}
            <a
              href="https://www.dsm.com/anh/products-and-services/tools/salmofan.html"
              target={"_blank"}
              className="rum-text underline-text"
            >
              SalmoFan
            </a>{" "}
            and{" "}
            <a
              href="https://www.dsm.com/anh/products-and-services/tools/salmofan.html"
              target={"_blank"}
              className="rum-text underline-text"
            >
              SalmoFan Lineal
            </a>{" "}
            are color measurement scales by{" "}
            <a
              href="https://www.dsm.com/anh/products-and-services/tools/salmofan.html"
              target={"_blank"}
              className="rum-text underline-text"
            >
              DSM
            </a>
            .
            <br />
            It serves as a color reference standard for measuring fillet color
            of salmonids.
          </p>
        </div>
        <div className="why-add-color-explanation-image-container">
          <img src={salmoFan} alt="salmofan" id="salmofan" />
          <img
            src={salmoFanLineal}
            alt="salmofan lineal"
            id="salmofan-lineal"
          />
        </div>
      </div>
    </>
  );
};
