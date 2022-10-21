import * as React from "react";
import AuthContext from "../LoginContext/auth-context";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LogoutNotification from "./Notifications/LogoutNotification";
import "./Header.css";

const Header = () => {
  const authCtx = React.useContext(AuthContext);

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {authCtx.isLoggedIn && (
        <Button
          onClick={() => setIsModalOpen(true)}
          variant="text"
          className="logoutBtn"
        >
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
      <LogoutNotification
        onCloseModalHandler={closeModalHandler}
        isModalOpen={isModalOpen}
      />
    </>
  );
};

export default Header;
