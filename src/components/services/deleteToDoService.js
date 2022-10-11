export async function deleteToDoservice(todo) {
  try {
    fetch(
      `https://todo-3ae6d-default-rtdb.firebaseio.com/todos/${todo.id}.json`,
      {
        method: "DELETE",
      }
    );
  } catch (error) {
    throw new Error(error);
  }
}
