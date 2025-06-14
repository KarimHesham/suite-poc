import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import typescriptLogo from "/typescript.svg";

const AppComponent = () => (
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" className="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img
        src={typescriptLogo}
        className="logo vanilla"
        alt="TypeScript logo"
      />
    </a>
    <div className="card">
      <App />
    </div>
  </div>
);

// Mount the app in development
if (import.meta.env.NODE_ENV !== "production") {
  ReactDOM.createRoot(document.getElementById("app")!).render(
    <React.StrictMode>
      <AppComponent />
    </React.StrictMode>
  );
}

const CrmApp = AppComponent;

export default CrmApp;
