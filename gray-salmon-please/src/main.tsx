import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { WindowSizeProvider } from "./context/WindowSizeContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WindowSizeProvider>
      <App />
    </WindowSizeProvider>
  </React.StrictMode>
);
