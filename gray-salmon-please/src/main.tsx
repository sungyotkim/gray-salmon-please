import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { WindowSizeProvider } from "./context/WindowSizeContext";
import { DarkModeProvider } from "./context/DarkModeContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WindowSizeProvider>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </WindowSizeProvider>
  </React.StrictMode>
);
