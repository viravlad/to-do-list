import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./SignUpForm.css";
import * as React from "react";
import { SignUpModalContext } from "../SignUpModalContext.js/sign-up-context";
import { SignUpHttpRequest } from "../http-requests/SignUpHttpRequest";

const SignUpForm = () => {
  const [enteredUsername, setEnteredUsername] = React.useState("");
  const [enteredPassword, setEnteredPassword] = React.useState("");

  const signUpModalContext = React.useContext(SignUpModalContext);
  const signUpHandler = async () => {
    if (enteredUsername === "") {
      return;
    }
    try {
      await SignUpHttpRequest(enteredUsername, enteredPassword);
    } catch (error) {
      console.log(error);
    }

    signUpModalContext.closeSignUpModalHandler();
    setEnteredPassword("");
    setEnteredUsername("");
  };

  return (
    <Dialog
      onClose={signUpModalContext.closeSignUpModalHandler}
      open={signUpModalContext.isModalOpen}
      className="signUpContainer"
    >
      <DialogTitle>
        S<span style={{ color: "#FBA100" }}>i</span>gn{" "}
        <span style={{ color: "#408697" }}>U</span>p
      </DialogTitle>
      <Box
        sx={{ display: "flex", flexDirection: "column" }}
        className="signUpForm"
      >
        <TextField
          id="standard-basic"
          label="Username"
          variant="standard"
          onChange={(e) => {
            setEnteredUsername(e.target.value);
          }}
        />
        <TextField
          id="standard-basic"
          label="Password"
          type="password"
          variant="standard"
          onChange={(e) => {
            setEnteredPassword(e.target.value);
          }}
          className="passwordInput"
        />
        <Button
          onClick={signUpHandler}
          variant="outlined"
          className="signUpButton"
        >
          Sign Up
        </Button>
      </Box>
      <DialogActions>
        <Button
          onClick={signUpModalContext.closeSignUpModalHandler}
          style={{ color: "#408697" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignUpForm;
