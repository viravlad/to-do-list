import React, { useEffect, useState } from "react";
import ViewToDo from "../components/ViewToDo/ViewToDoList";
import NewToDo from "../components/NewToDoForm/NewToDo";
import Grow from "@mui/material/Grow";
import Alert from "@mui/material/Alert";
import { getToDoListService } from "../components/services/getToDoListService";
import "./ToDoContainer.css";
import AuthContext from "../components/LoginContext/auth-context";

const ToDoContainer = () => {
  const [todos, setTodos] = useState([]);
  const [toDoError, setToDoError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [updateToDoList, setUpdateToDoList] = useState(false);
  const [show, setShow] = useState(true);
  const authCtx = React.useContext(AuthContext);

  async function getToDoList() {
    try {
      setIsLoading(true);
      const loadedTodos = await getToDoListService(authCtx.userId);
      setTodos(loadedTodos);
    } catch (error) {
      setToDoError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 4000);
  }, []);

  useEffect(() => {
    getToDoList();
  }, []);

  useEffect(() => {
    if (updateToDoList) {
      getToDoList();
      setUpdateToDoList(false);
    }
  }, [updateToDoList]);

  return (
    <div>
      {authCtx.isLoggedIn && show && (
        <Grow
          in={show}
          style={{ transformOrigin: "0 0 0" }}
          {...(show ? { timeout: 2500 } : {})}
        >
          <Alert severity="success">You are successfully logged in</Alert>
        </Grow>
      )}
      <NewToDo setUpdateToDoList={setUpdateToDoList} />
      {!toDoError ? (
        <ViewToDo todos={todos} setUpdateToDoList={setUpdateToDoList} />
      ) : (
        toDoError
      )}
    </div>
  );
};

export default ToDoContainer;
