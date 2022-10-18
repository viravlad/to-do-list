import * as React from "react";
import Typography from "@mui/material/Typography";
import "./Header.css";
import AuthContext from "../LoginContext/auth-context";
import Button from "@mui/material/Button";

const Header = () => {
  const authCtx = React.useContext(AuthContext);

  return (
    <>
      {authCtx.isLoggedIn && (
        <Button onClick={authCtx.logout} variant="text" className="logoutBtn">
          Logout
        </Button>
      )}
      <Typography
        className="header"
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
      >
        <h2>
          TH<span style={{ color: "#FBA100" }}>I</span>NGS{" "}
        </h2>
        <h3>
          T<span style={{ color: "#408697" }}>o</span>Do
        </h3>
      </Typography>
    </>
  );
};

export default Header;
