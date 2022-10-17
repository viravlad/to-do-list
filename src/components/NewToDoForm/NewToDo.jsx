import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import "./NewTodo.css";
import { newToDoService } from "../services/newToDoService";
import React from "react";

const NewToDo = () => {
  const [enteredToDoName, setEnteredToDoName] = React.useState("");
  const [error, setError] = React.useState("");

  const addNewToDoHandler = async () => {
    if (enteredToDoName === "") {
      return;
    }
    const newToDo = {
      name: enteredToDoName,
      status: "not completed",
    };
    try {
      newToDoService(newToDo);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }

    setEnteredToDoName("");
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
      <p>{error}</p>
    </Box>
  );
};

export default NewToDo;
