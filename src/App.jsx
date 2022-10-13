import React from "react";
import "./App.css";
import AuthContext from "./components/LoginContext/auth-context";
import LoginForm from "./components/LoginForm/LoginForm";
import Header from "./components/Navbar/Header";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import ToDoContainer from "./container/ToDoContainer";
function App() {
  const authCtx = React.useContext(AuthContext);
  const isLoggedIn = false;
  return (
    <div className="App">
      <Header />
      <SignUpForm />
      {!authCtx.isLoggedIn ? <LoginForm /> : <ToDoContainer />}
    </div>
  );
}

export default App;
