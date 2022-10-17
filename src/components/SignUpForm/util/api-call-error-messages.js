import { Messages } from "../../Messages/Messages";

export const displayErrorMessages = (err) => {
  switch (err) {
    case "EMAIL_EXISTS":
      return Messages.SIGN_UP_EMAIL_EXISTS;
    case "MISSING_PASSWORD":
      return Messages.SIGN_UP_MISSING_PASSWORD;
    default:
      return err;
  }
};
