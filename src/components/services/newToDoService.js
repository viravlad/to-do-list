export async function newToDoService(data) {
  try {
    fetch("https://todo-3ae6d-default-rtdb.firebaseio.com/todos.json", {
      method: "POST",
      body: JSON.stringify(data),
    });
  } catch (error) {
    throw new Error(error);
  }
}
