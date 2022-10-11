import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./components/LoginContext/auth-context";
import { SignUpModalContextProvider } from "./components/SignUpModalContext.js/sign-up-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <SignUpModalContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </SignUpModalContextProvider>
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
