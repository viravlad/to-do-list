import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./LoginForm.css";
import React, { useContext } from "react";
import AuthContext from "../LoginContext/auth-context";
import { LoginHttpRequest } from "../http-requests/LoginHttpRequest";
import { SignUpModalContext } from "../SignUpModalContext.js/sign-up-context";
import { displayErrorMessages } from "./utils/api-call-error-messages";
import ErrorNotificationDialog from "./notification/ErrorNotificationDialog";
import { LoginErrorNotificationContext } from "./notification-context/error-notification-context";

const LoginForm = () => {
  const authCtx = useContext(AuthContext);
  const [enteredUsername, setEnteredUsername] = React.useState("");
  const [enteredPassword, setEnteredPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const signUpModalContext = React.useContext(SignUpModalContext);
  const errorNotificationContext = React.useContext(
    LoginErrorNotificationContext
  );

  const loginUserHandler = async () => {
    try {
      const data = await LoginHttpRequest(enteredUsername, enteredPassword);

      authCtx.login(data.idToken);
      clearInputs();
    } catch (error) {
      setError(displayErrorMessages(error.message));
      errorNotificationContext.openNotificationHandler();
    }
  };

  const clearInputs = () => {
    setEnteredUsername("");
    setEnteredPassword("");
  };

  return (
    <Box className="loginContainer">
      {error ? <ErrorNotificationDialog error={error} /> : ""}
      <div className="loginLabels">
        <TextField
          className="usernameInput"
          id="standard-basic"
          label="Username"
          variant="filled"
          onChange={(e) => {
            setEnteredUsername(e.target.value);
          }}
        />
        <TextField
          onChange={(e) => {
            setEnteredPassword(e.target.value);
          }}
          className="passwordInput"
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
      </div>
      <div className="loginButtonsBox">
        <Button
          onClick={loginUserHandler}
          variant="contained"
          className="signInButton"
        >
          Log in
        </Button>
        <span className="or">
          <span>OR</span>
        </span>
        <Button
          onClick={signUpModalContext.openSignUpModalHandler}
          variant="contained"
          className="signUpButton"
        >
          Sign Up
        </Button>
      </div>
    </Box>
  );
};

export default LoginForm;
