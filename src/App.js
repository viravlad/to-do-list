import React from "react";
import "./App.css";
import AuthContext from "./components/LoginContext/auth-context";
import LoginForm from "./components/LoginForm/LoginForm";
import Navbar from "./components/Navbar/Navbar";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import ToDoContainer from "./components/ToDoContainer";
function App() {
  const authCtx = React.useContext(AuthContext);
  const isLoggedIn = true;
  return (
    <div className="App">
      <Navbar />
      <SignUpForm />
      {!isLoggedIn ? <LoginForm /> : <ToDoContainer />}
    </div>
  );
}

export default App;
