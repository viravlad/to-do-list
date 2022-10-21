import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import { SignUpModalContext } from "../SignUpModalContext.js/sign-up-context";
import { SignUpHttpRequest } from "../services/signUpService";
import { validateEmail } from "./util/validate-email";
import { displayErrorMessages } from "./util/api-call-error-messages";
import "./SignUpForm.css";

const SignUpForm = () => {
  const [enteredUsername, setEnteredUsername] = React.useState("");
  const [enteredPassword, setEnteredPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [show, setShow] = React.useState(false);

  const signUpModalContext = React.useContext(SignUpModalContext);
  const signUpHandler = async () => {
    if (!validateEmail(enteredUsername)) {
      setError("Enter a valid email");
      return;
    }

    const clearInputs = () => {
      setEnteredUsername("");
      setEnteredPassword("");
    };

    try {
      const response = await SignUpHttpRequest(
        enteredUsername,
        enteredPassword
      );
      if (response.ok) {
        setError("");
        setShow(true);
        (() => {
          setTimeout(() => {
            signUpModalContext.closeSignUpModalHandler();
            setShow(false);
            clearInputs();
          }, 5000);
        })();
      }
    } catch (error) {
      setError(displayErrorMessages(error.message));
    }
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
        {show && (
          <Alert severity="success" className="registerAlert">
            Registered successfully!
          </Alert>
        )}
        <TextField
          id="standard-basic"
          label="Username"
          variant="standard"
          onChange={(e) => {
            setEnteredUsername(e.target.value);
          }}
          value={enteredUsername}
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
          value={enteredPassword}
        />
        {error && <span style={{ color: "red" }}>{error}</span>}
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
