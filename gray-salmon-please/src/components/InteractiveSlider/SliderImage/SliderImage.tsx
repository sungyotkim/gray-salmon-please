import React from "react";
import "./SliderImage.css";
import SalmonFillet from "../../../assets/salmon-fillet.svg";

interface SliderImageProps {}

export const SliderImage: React.FC<SliderImageProps> = ({}) => {
  return (
    <>
      <div className="slider-image">
        <img src={SalmonFillet} alt="salmon-fillet" id="slider-fillet-img" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="10.01 200.87 980 598.26"
          id="slider-fillet-color"
        >
          <g>
            <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
              <path
                fill="pink"
                d="M 4597.2 3090.2 c -153.2 -7.7 -509.3 -40.2 -794.5 -72.7 c -283.3 -32.6 -624.1 -65.1 -752.4 -72.8 c -231.7 -11.5 -239.3 -13.4 -346.5 -82.3 c -281.4 -181.9 -903.7 -750.5 -1705.9 -1564.2 c -499.7 -505.4 -553.3 -564.8 -628 -708.4 C 262.7 385 201.4 218.4 144 -17.1 c -55.5 -229.7 -57.4 -281.4 -11.5 -335 c 36.4 -45.9 1049.2 -400.1 2843.1 -995.6 c 1187 -394.4 1784.4 -572.5 2674.6 -800.3 c 1336.4 -340.8 2996.3 -733.3 3107.3 -733.3 c 93.8 0 113 30.6 300.6 444.2 c 461.4 1016.6 767.7 1931.8 823.3 2448.7 c 40.2 381 11.5 1005.2 -49.8 1072.2 c -17.2 19.1 -105.3 74.7 -195.3 126.4 c -90 49.8 -333.1 206.8 -538 346.5 c -1215.7 829 -1562.3 1024.3 -2182.6 1236.8 c -526.5 180 -1085.6 271.9 -1887.7 306.3 C 4943.7 3103.6 4750.4 3099.8 4597.2 3090.2"
              />
            </g>
          </g>
        </svg>
      </div>
    </>
  );
};
