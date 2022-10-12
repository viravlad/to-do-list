import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./LoginForm.css";
import React, { useContext } from "react";
import AuthContext from "../LoginContext/auth-context";
import { LoginHttpRequest } from "../http-requests/LoginHttpRequest";
import { SignUpModalContext } from "../SignUpModalContext.js/sign-up-context";

const LoginForm = () => {
  const authCtx = useContext(AuthContext);
  const [enteredUsername, setEnteredUsername] = React.useState("");
  const [enteredPassword, setEnteredPassword] = React.useState("");
  const signUpModalContext = React.useContext(SignUpModalContext);

  const loginUserHandler = async () => {
    try {
      const token = await LoginHttpRequest(enteredUsername, enteredPassword);
      authCtx.login(token);
    } catch (error) {}
  };

  return (
    <Box className="loginContainer">
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
