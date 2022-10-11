import { useEffect, useState } from "react";
import NewToDo from "./NewToDoForm/NewToDo";
import { getToDoListService } from "./services/getToDoListService";
import ViewToDo from "./ViewToDo/ViewToDoList";

const ToDoContainer = () => {
  const [todos, setTodos] = useState([]);
  const [toDoError, setToDoError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function getToDoList() {
    try {
      setIsLoading(true);
      const loadedTodos = await getToDoListService();
      setTodos(loadedTodos);
    } catch (error) {
      setToDoError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getToDoList();
  }, []);

  return (
    <>
      <NewToDo />
      {!toDoError ? <ViewToDo todos={todos} /> : toDoError}
      {isLoading ? <h1>LOADDDING</h1> : <h1>Is NOt LOADING</h1>}
    </>
  );
};

export default ToDoContainer;
