import React from "react";
import "./Comparison.css";

interface ComparisonProps {}

export const Comparison: React.FC<ComparisonProps> = ({}) => {
  return (
    <>
      <div className="comparison-container">
        <h2>Farmed vs Wild</h2>
        <h3>What's the difference?</h3>
        <div className="comparison-table">
          <div className="comparison-left-container">
            <li>Generally lower price</li>
            <li>Available year round</li>
            <li>Longer shelf life</li>
            <li>Less diverse species options</li>
            <li>Requires artificial coloring</li>
          </div>
          <div className="comparison-divider"></div>
          <div className="comparison-right-container">
            <li>Generally higher price</li>
            <li>Available seasonally (spring and summer)</li>
            <li>Shorter shelf life</li>
            <li>Greater species variety during the season</li>
            <li>Naturally colored</li>
          </div>
        </div>
      </div>
    </>
  );
};
