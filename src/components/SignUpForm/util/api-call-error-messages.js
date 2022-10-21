import { Messages } from "../../Messages/Messages";

export const displayErrorMessages = (err) => {
  debugger;
  switch (err) {
    case "EMAIL_EXISTS":
      return Messages.SIGN_UP_EMAIL_EXISTS;
    case "MISSING_PASSWORD":
      return Messages.SIGN_UP_MISSING_PASSWORD;
    case "WEAK_PASSWORD : Password should be at least 6 characters":
      return Messages.SIGN_UP_WEAK_PASSWORD;
    default:
      return err;
  }
};
