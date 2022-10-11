import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import { deleteToDoservice } from "../services/deleteToDoService";
import { updateToDoService } from "../services/updateToDoService";
import "./ViewToDoItem.css";

const ViewToDoItem = ({ todo }) => {
  const deleteToDoHandler = (todo) => {
    deleteToDoservice(todo);
  };

  const updateToDoHandler = (todo) => {
    const data = {
      ...todo,
      status: "completed",
    };
    updateToDoService(todo, data);
  };

  const toDoStatusClass =
    todo.status === "completed" ? "completed" : "notCompleted";

  return (
    <ListItem
      key={todo.id}
      secondaryAction={
        <>
          <IconButton
            edge="end"
            aria-label="deletecheck"
            onClick={() => updateToDoHandler(todo)}
          >
            <CheckIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => deleteToDoHandler(todo)}
          >
            <DeleteIcon />
          </IconButton>
        </>
      }
    >
      <ListItemText
        className={toDoStatusClass}
        primary={todo.name}
        secondary={todo.status}
      />
    </ListItem>
  );
};

export default ViewToDoItem;
