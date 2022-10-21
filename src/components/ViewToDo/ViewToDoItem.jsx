import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";
import { deleteToDoservice } from "../services/deleteToDoService";
import { updateToDoService } from "../services/updateToDoService";
import "./ViewToDoItem.css";
import React from "react";
import AuthContext from "../LoginContext/auth-context";

const ViewToDoItem = ({ todo, setUpdateToDoList }) => {
  const authCtx = React.useContext(AuthContext);
  const [isEdit, setIsEdit] = React.useState(false);
  const [editedTodo, setEditedToDo] = React.useState(todo.name);

  const deleteToDoHandler = async (todo) => {
    await deleteToDoservice(todo, authCtx.userId);
    setUpdateToDoList(true);
  };

  const updateToDoHandler = async (todo) => {
    const data = {
      ...todo,
      status: "completed",
    };
    await updateToDoService(todo, data, authCtx.userId);
    setUpdateToDoList(true);
  };

  const editHandler = async () => {
    setIsEdit((prev) => !prev);
    const data = {
      ...todo,
      name: editedTodo,
    };
    await updateToDoService(todo, data, authCtx.userId);
    setUpdateToDoList(true);
  };

  let EditBtnText = isEdit ? "Save" : "Edit";

  const toDoStatusClass =
    todo.status === "completed" ? "completed" : "notCompleted";
  return (
    <ListItem
      className="listItem"
      secondaryAction={
        <>
          {todo.status === "not completed" && (
            <IconButton
              edge="end"
              aria-label="deletecheck"
              onClick={() => updateToDoHandler(todo)}
            >
              <CheckIcon />
            </IconButton>
          )}

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
      {isEdit ? (
        <Input
          defaultValue={todo.name}
          onChange={(e) => setEditedToDo(e.target.value)}
        />
      ) : (
        <ListItemText
          className={toDoStatusClass}
          primary={todo.name}
          secondary={todo.status}
        />
      )}

      <Button onClick={editHandler} className="editButton">
        {EditBtnText}
      </Button>
    </ListItem>
  );
};

export default ViewToDoItem;
