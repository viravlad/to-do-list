import React, { useState } from "react";

export const SignUpModalContext = React.createContext({
  isModalOpen: false,
  openSignUpModalHandler: () => {},
  closeSignUpModalHandler: () => {},
});

export const SignUpModalContextProvider = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openSignUpModalHandler = () => {
    setIsModalOpen(true);
  };
  const closeSignUpModalHandler = () => {
    setIsModalOpen(false);
  };

  const contextValue = {
    openSignUpModalHandler: openSignUpModalHandler,
    closeSignUpModalHandler: closeSignUpModalHandler,
    isModalOpen: isModalOpen,
  };
  return (
    <SignUpModalContext.Provider value={contextValue}>
      {props.children}
    </SignUpModalContext.Provider>
  );
};
