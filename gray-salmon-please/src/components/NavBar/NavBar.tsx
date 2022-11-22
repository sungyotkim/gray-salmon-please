import React, { useContext, useEffect, useRef, useState } from "react";
import "./NavBar.css";
import { SiGmail, SiGithub, SiLinkedin, SiAngellist } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import websiteLogo from "../../assets/website-logo-tommy.png";
import { WindowSizeContext } from "../../context/WindowSizeContext";

export const NavBar: React.FC<{}> = ({}) => {
  const { windowWidth, mobileView } = useContext(WindowSizeContext);
  const [showMobileDropdown, setShowMobileDropdown] = useState<boolean>(true);
  const divRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);

    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 500) {
      setShowMobileDropdown(true);
    } else {
      setShowMobileDropdown(false);
    }

    return () => {
      setShowMobileDropdown(true);
    };
  }, [windowWidth]);

  const handleClick = () => {
    if (showMobileDropdown) {
      setShowMobileDropdown(false);
    } else {
      setShowMobileDropdown(true);
    }
  };

  function clickOutside(e: any) {
    if (!mobileView) return;

    if (divRef.current && dropdownRef.current) {
      if (divRef.current.contains(e.target)) {
        return;
      } else if (dropdownRef.current.contains(e.target)) {
        return;
      } else {
        setShowMobileDropdown(false);
      }
    }
    setShowMobileDropdown(false);
  }

  return (
    <div className="nav-wrapper">
      <div className="nav-container">
        <div className="nav-name-container">Gray Salmon Please!</div>
        <div className="mobile-nav-link-wrapper">
          <div
            className="mobile-burger-menu"
            onClick={handleClick}
            ref={dropdownRef}
          >
            <GiHamburgerMenu />
          </div>
          {showMobileDropdown && (
            <div className="nav-links" ref={divRef}>
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
