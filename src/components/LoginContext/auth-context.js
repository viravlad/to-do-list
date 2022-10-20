import React from "react";

const AuthContext = React.createContext({
  token: "",
  userId: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  userIdHandler: (user) => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const initialUserId = localStorage.getItem("userId");
  const [token, setToken] = React.useState(initialToken);

  const isLoggedIn = token ? true : false;
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  };

  //userLocalId
  const [userId, setUserId] = React.useState(initialUserId);

  const userIdHandler = (user) => {
    setUserId(user);
  };

  const contextValue = {
    token: token,
    userId: userId,
    isLoggedIn: isLoggedIn,
    login: loginHandler,
    logout: logout,
    userIdHandler: userIdHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
