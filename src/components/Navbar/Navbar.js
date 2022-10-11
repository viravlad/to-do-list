import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Navbar.css";
import AuthContext from "../LoginContext/auth-context";
import { SignUpModalContext } from "../SignUpModalContext.js/sign-up-context";

const Navbar = () => {
  const authCtx = React.useContext(AuthContext);
  const signUpModalContext = React.useContext(SignUpModalContext);

  const openSignUpForm = () => {};

  return (
    <AppBar>
      <Toolbar className={"navbar"}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          To - Do List
        </Typography>
        {!authCtx.isLoggedIn && (
          <Button
            color="inherit"
            onClick={signUpModalContext.openSignUpModalHandler}
          >
            Sign up
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
