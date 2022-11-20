import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { SiGmail, SiGithub, SiLinkedin, SiAngellist } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import websiteLogo from "../../assets/website-logo-tommy.png";

// interface NavBarProps {}

const getWindowSize = () => {
  const { innerWidth } = window;
  return innerWidth;
};

export const NavBar: React.FC<{}> = ({}) => {
  const [windowSize, setWindowSize] = useState<number | (() => number)>(
    getWindowSize()
  );
  const [showMobileDropdown, setShowMobileDropdown] = useState<boolean>(true);
  const [mobileView, setMobileView] = useState<boolean>(false);

  const handleClick = () => {
    setShowMobileDropdown(!showMobileDropdown);
  };

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize > 500) {
      setShowMobileDropdown(true);
      setMobileView(false);
    } else {
      setShowMobileDropdown(false);
      setMobileView(true);
    }

    return () => {
      setShowMobileDropdown(true);
      setMobileView(false);
    };
  }, [windowSize]);

  return (
    <div className="nav-wrapper">
      <div className="nav-container">
        <div className="nav-name-container">Gray Salmon Please!</div>
        <div className="mobile-nav-link-wrapper">
          <div className="mobile-burger-menu" onClick={handleClick}>
            <GiHamburgerMenu />
          </div>
          {showMobileDropdown && (
            <div className="nav-links">
              <div
                onClick={() =>
                  (window.location.href = "mailto:sungyotkim@gmail.com")
                }
                className="nav-link"
              >
                <SiGmail />
                {mobileView && <div className="mobile-menu-text">Email me</div>}
              </div>
              <a
                href="https://github.com/sungyotkim"
                target={"_blank"}
                rel="noreferrer"
                className="nav-link"
              >
                <SiGithub />
                {mobileView && <div className="mobile-menu-text">Github</div>}
              </a>
              <a
                href="https://www.linkedin.com/in/sungyotkim/"
                target={"_blank"}
                rel="noreferrer"
                className="nav-link"
              >
                <SiLinkedin />
                {mobileView && <div className="mobile-menu-text">LinkedIn</div>}
              </a>
              <a
                href="https://angel.co/u/sungyo-tommy-kim"
                target={"_blank"}
                rel="noreferrer"
                className="nav-link"
              >
                <SiAngellist />
                {mobileView && (
                  <div className="mobile-menu-text">AngelList</div>
                )}
              </a>
              <a
                href="https://tommykim.me"
                target={"_blank"}
                rel="noreferrer"
                className="nav-link"
              >
                <img src={websiteLogo} alt="portfolio" />
                {mobileView && (
                  <div className="mobile-menu-text">Portfolio Site</div>
                )}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
