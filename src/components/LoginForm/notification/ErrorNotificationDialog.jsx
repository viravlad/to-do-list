import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { LoginErrorNotificationContext } from "../notification-context/error-notification-context";

const ErrorNotificationDialog = ({ error, isOpen }) => {
  const errorNotificationContext = React.useContext(
    LoginErrorNotificationContext
  );

  return (
    <div>
      <Dialog
        open={errorNotificationContext.isNotificationOpen}
        onClose={() => {
          errorNotificationContext.closeNotificationHandler();
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Authentification is failling"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {error}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              errorNotificationContext.closeNotificationHandler();
            }}
            autoFocus
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ErrorNotificationDialog;
