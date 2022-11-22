import React, { PropsWithChildren } from "react";
import { createContext, useState } from "react";
import { getWindowWidth } from "../utils/findWindowSize";

interface ContextState {
  windowWidth: number | (() => number);
  setWindowWidth: React.Dispatch<React.SetStateAction<number | (() => number)>>;
  mobileView: boolean;
  setMobileView: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WindowSizeContext = createContext({} as ContextState);

export const WindowSizeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [windowWidth, setWindowWidth] = useState<number | (() => number)>(
    getWindowWidth()
  );
  const [mobileView, setMobileView] = useState<boolean>(false);

  return (
    <>
      <WindowSizeContext.Provider
        value={{
          windowWidth,
          setWindowWidth,
          mobileView,
          setMobileView,
        }}
      >
        {children}
      </WindowSizeContext.Provider>
    </>
  );
};
