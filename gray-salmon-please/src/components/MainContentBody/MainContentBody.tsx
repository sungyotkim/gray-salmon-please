import React from "react";
import "./MainContentBody.css";
import { Introduction } from "./Introduction/Introduction";
import { Comparison } from "./Comparison/Comparison";

interface MainContentBodyProps {}

export const MainContentBody: React.FC<MainContentBodyProps> = ({}) => {
  return (
    <>
      <div className="main-content-wrapper">
        <Introduction />
        <Comparison />
      </div>
    </>
  );
};
