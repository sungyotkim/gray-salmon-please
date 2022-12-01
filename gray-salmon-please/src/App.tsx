import { useContext, useEffect } from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { WindowSizeContext } from "./context/WindowSizeContext";
import { DarkModeContext } from "./context/DarkModeContext";
import { getWindowWidth } from "./utils/findWindowSize";
import { MainContentBody } from "./components/MainContentBody/MainContentBody";
import { InteractiveCharts } from "./components/InteractiveCharts/InteractiveCharts";

function App() {
  const { windowWidth, setWindowWidth, setMobileView } =
    useContext(WindowSizeContext);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(getWindowWidth());
    }

    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? setDarkMode(true)
      : setDarkMode(false);

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 500) {
      setMobileView(false);
    } else {
      setMobileView(true);
    }

    return () => {
      setMobileView(false);
    };
  }, [windowWidth]);

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className="container">
        <div className={darkMode ? "background-dark" : "background"}></div>
        <button onClick={toggle}>darkmode</button>
        <NavBar />
        <MainContentBody />
        <InteractiveCharts />
      </div>
    </>
  );
}

export default App;
