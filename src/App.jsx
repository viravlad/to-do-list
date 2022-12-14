import React from "react";
import AuthContext from "./components/LoginContext/auth-context";
import LoginForm from "./components/LoginForm/LoginForm";
import Header from "./components/Navbar/Header";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import ToDoContainer from "./container/ToDoContainer";
import "./App.css";
function App() {
  const authCtx = React.useContext(AuthContext);
  return (
    <div className="App">
      <Header />
      <SignUpForm />
      {!authCtx.isLoggedIn ? <LoginForm /> : <ToDoContainer />}
    </div>
  );
}

export default App;
