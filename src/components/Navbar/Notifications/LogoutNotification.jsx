import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import AuthContext from "../../LoginContext/auth-context";

const LogoutNotification = ({ isModalOpen, onCloseModalHandler }) => {
  const authCtx = React.useContext(AuthContext);

  return (
    <Dialog
      open={isModalOpen}
      onClose={() => onCloseModalHandler()}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {"Are you sure you want to log out?"}
      </DialogTitle>

      <DialogActions>
        <Button
          autoFocus
          onClick={() => {
            authCtx.logout();
            onCloseModalHandler();
          }}
        >
          Yes
        </Button>
        <Button onClick={() => onCloseModalHandler()} autoFocus>
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LogoutNotification;
