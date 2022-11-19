import React from "react";
import "./NavBar.css";
import { SiGmail, SiGithub, SiLinkedin, SiAngellist } from "react-icons/si";

// interface NavBarProps {}

export const NavBar: React.FC<{}> = ({}) => {
  return (
    <div className="nav-wrapper">
      <div className="nav-container">
        <div className="nav-name-container">Gray Salmon Please!</div>
        <div className="nav-links">
          <div
            onClick={() =>
              (window.location.href = "mailto:sungyotkim@gmail.com")
            }
            className="nav-link"
          >
            <SiGmail />
          </div>
          <a
            href="https://github.com/sungyotkim"
            target={"_blank"}
            rel="noreferrer"
            className="nav-link"
          >
            <SiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sungyotkim/"
            target={"_blank"}
            rel="noreferrer"
            className="nav-link"
          >
            <SiLinkedin />
          </a>
          <a
            href="https://angel.co/u/sungyo-tommy-kim"
            target={"_blank"}
            rel="noreferrer"
            className="nav-link"
          >
            <SiAngellist />
          </a>
        </div>
      </div>
    </div>
  );
};
