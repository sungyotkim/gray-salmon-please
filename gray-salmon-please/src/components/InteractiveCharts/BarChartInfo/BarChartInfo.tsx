import React from "react";

interface BarChartInfoProps {}

export const BarChartInfo: React.FC<BarChartInfoProps> = ({}) => {
  return (
    <>
      <div>
        The following chart displays consumers' estimated willingness to pay (in
        USD) per kg of salmon. The results are split into two parts. The first
        set of data,<span className="bold-text"> before information</span>,
        represents consumers' initial willingness to pay for a kg of salmon of
        the specified color. The second set of data,
        <span className="bold-text"> after information</span>, represents
        consumers' willingness to pay for a kg of salmon of the specified color
        after receiving information about the origin of the salmon's color. The
        estimated values were extrapolated from{" "}
        <a
          href="http://www.umb.no/statisk/ior/ferdig.pdf"
          target={"_blank"}
          className="rum-text underline-text"
        >
          this research study.
        </a>
      </div>
    </>
  );
};
