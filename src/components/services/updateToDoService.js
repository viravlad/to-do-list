export async function updateToDoService(todo, data) {
  try {
    fetch(
      `https://todo-3ae6d-default-rtdb.firebaseio.com/todos/${todo.id}.json`,
      {
        method: "PUT",
        body: JSON.stringify(data),
      }
    );
  } catch (error) {
    throw new Error(error);
  }
}
