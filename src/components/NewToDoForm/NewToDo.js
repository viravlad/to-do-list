import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import "./NewTodo.css";
import { useState } from "react";
import { newToDoService } from "../services/newToDoService";

const NewToDo = () => {
  const [enteredToDoName, setEnteredToDoName] = useState("");

  const enteredToDoNameHandler = (e) => {
    setEnteredToDoName(e.target.value);
  };

  const addNewToDoHandler = () => {
    if (enteredToDoName === "") {
      return;
    }
    const newToDo = {
      name: enteredToDoName,
      status: "not completed",
    };
    newToDoService(newToDo);
    setEnteredToDoName("");
  };

  return (
    <Box className="container">
      <div style={{ flexdirection: "row" }}>
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          className="inputField"
          onChange={enteredToDoNameHandler}
          value={enteredToDoName}
        />
        {/* {enteredToDoNameError && (
          <Typography style={{ color: "red" }} variant={"subtitle2"}>
            Enter a valid to do{" "}
          </Typography>
        )} */}
      </div>
      <Button variant="text" onClick={addNewToDoHandler}>
        <AddCircleIcon className="addNewToDoIcon" />
      </Button>
    </Box>
  );
};

export default NewToDo;
