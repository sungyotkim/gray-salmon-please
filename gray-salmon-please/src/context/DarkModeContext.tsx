import React from "react";
import { createContext, useState } from "react";

interface ContextState {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DarkModeContext = createContext({} as ContextState);

export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <>
      <DarkModeContext.Provider
        value={{
          darkMode,
          setDarkMode,
        }}
      >
        {children}
      </DarkModeContext.Provider>
    </>
  );
};
