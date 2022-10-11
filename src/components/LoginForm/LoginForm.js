import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./LoginForm.css";
import { useContext, useState } from "react";
import AuthContext from "../LoginContext/auth-context";
import { LoginHttpRequest } from "../http-requests/LoginHttpRequest";

const LoginForm = () => {
  const authCtx = useContext(AuthContext);
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

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
          id="standard-basic"
          label="Username"
          variant="standard"
          onChange={(e) => {
            setEnteredUsername(e.target.value);
          }}
        />
        <TextField
          onChange={(e) => {
            setEnteredPassword(e.target.value);
          }}
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
      </div>
      <Button
        onClick={loginUserHandler}
        variant="outlined"
        className="signInButton"
      >
        Sign in
      </Button>
    </Box>
  );
};

export default LoginForm;
