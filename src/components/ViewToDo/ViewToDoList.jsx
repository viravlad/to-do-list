import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./ViewToDoList.css";
import List from "@mui/material/List";
import ViewToDoItem from "./ViewToDoItem";
import { useEffect, useState } from "react";

const ViewToDoList = ({ todos }) => {
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [toDoStatus, setToDoStatus] = useState("");
  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  const displayToDoStatus = (e) => {
    setToDoStatus(e);
    switch (e) {
      case "completed":
        setFilteredTodos(todos.filter((t) => t.status === "completed"));
        break;
      case "not completed":
        setFilteredTodos(todos.filter((t) => t.status === "not completed"));
        break;
      case "all":
        setFilteredTodos(todos.filter((t) => t));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  return (
    <Box className="viewToDoList">
      <FormControl className="toDoSelect">
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          className="selectField"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Status"
          value={toDoStatus}
          onChange={(e) => {
            displayToDoStatus(e.target.value);
          }}
        >
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"completed"}>Completed</MenuItem>
          <MenuItem value={"not completed"}>Not Completed</MenuItem>
        </Select>
      </FormControl>
      <List className="listItems">
        {filteredTodos.map((todo) => (
          <ViewToDoItem todo={todo} key={todo.id} />
        ))}
      </List>
    </Box>
  );
};

export default ViewToDoList;
