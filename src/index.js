import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./components/LoginContext/auth-context";
import { SignUpModalContextProvider } from "./components/SignUpModalContext.js/sign-up-context";
import { LoginErrorNotificationContextProvider } from "./components/LoginForm/notification-context/error-notification-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <SignUpModalContextProvider>
      <LoginErrorNotificationContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </LoginErrorNotificationContextProvider>
    </SignUpModalContextProvider>
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
