import { useContext, useEffect } from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { WindowSizeContext } from "./context/WindowSizeContext";
import { getWindowWidth } from "./utils/findWindowSize";

function App() {
  const { windowWidth, setWindowWidth, setMobileView } =
    useContext(WindowSizeContext);

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(getWindowWidth());
    }

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

  return (
    <>
      <NavBar />
    </>
  );
}

export default App;
