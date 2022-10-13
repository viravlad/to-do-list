import { Messages } from "../../Messages/Messages";

export const displayErrorMessages = (err) => {
  switch (err) {
    case "INVALID_EMAIL":
      return Messages.LOGIN_INVALID_USERNAME;

    case "EMAIL_NOT_FOUND":
      return Messages.LOGIN_MISSING_USERNAME;

    case "INVALID_PASSWORD":
      return Messages.LOGIN_INVALID_PASSWORD;

    case "MISSING_PASSWORD":
      return Messages.LOGIN_MISSING_PASSWORD;

    default:
      return err;
  }
};
