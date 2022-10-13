import React, { useState } from "react";

export const LoginErrorNotificationContext = React.createContext({
  isNotificationOpen: false,
  openNotificationHandler: () => {},
  closeNotificationHandler: () => {},
});

export const LoginErrorNotificationContextProvider = (props) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const openNotificationHandler = () => {
    setIsNotificationOpen(true);
  };
  const closeNotificationHandler = () => {
    setIsNotificationOpen(false);
  };

  const contextValue = {
    isNotificationOpen: isNotificationOpen,
    openNotificationHandler: openNotificationHandler,
    closeNotificationHandler: closeNotificationHandler,
  };

  return (
    <LoginErrorNotificationContext.Provider value={contextValue}>
      {props.children}
    </LoginErrorNotificationContext.Provider>
  );
};
