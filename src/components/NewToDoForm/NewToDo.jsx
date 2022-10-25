import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import { newToDoService } from "../services/newToDoService";
import AuthContext from "../LoginContext/auth-context";
import "./NewTodo.css";

const NewToDo = ({ setUpdateToDoList }) => {
  const [enteredToDoName, setEnteredToDoName] = React.useState("");
  const [error, setError] = React.useState("");
  const authCtx = React.useContext(AuthContext);

  const addNewToDoHandler = async () => {
    if (enteredToDoName === "") {
      setError("Please fill out this field");
      return;
    }

    const newToDo = {
      name: enteredToDoName,
      status: "not completed",
    };
    try {
      const response = await newToDoService(newToDo, authCtx.userId);
      if (response.ok) {
        setUpdateToDoList(true);
        setEnteredToDoName("");
        setError("");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Box className="container">
      <div style={{ flexdirection: "row" }}>
        <TextField
          id="standard-basic"
          label="Add new todo"
          variant="filled"
          className="inputField"
          onChange={(e) => {
            setEnteredToDoName(e.target.value);
          }}
          value={enteredToDoName}
        />
      </div>
      <Button variant="text" onClick={addNewToDoHandler}>
        <AddCircleIcon className="addNewToDoIcon" />
      </Button>
      <span>{error}</span>
    </Box>
  );
};

export default NewToDo;
