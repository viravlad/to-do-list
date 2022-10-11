import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState("");
  const isLoggedIn = token ? true : false;
  const loginHandler = (token) => {
    setToken(token);
  };

  const contextValue = {
    token: token,
    isLoggedIn: isLoggedIn,
    login: loginHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
