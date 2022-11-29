import React from "react";
import "./MainContentBody.css";
import { Introduction } from "./Introduction/Introduction";

interface MainContentBodyProps {}

export const MainContentBody: React.FC<MainContentBodyProps> = ({}) => {
  return (
    <>
      <div className="main-content-wrapper">
        <Introduction />
      </div>
    </>
  );
};
