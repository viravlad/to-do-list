export async function getToDoListService() {
  try {
    const response = await fetch(
      "https://todo-3ae6d-default-rtdb.firebaseio.com/todos.json",
      { method: "GET" }
    );
    const data = await response.json();
    const loadedTodos = [];
    for (const key in data) {
      loadedTodos.push({
        id: key,
        name: data[key].name,
        status: data[key].status,
      });
    }
    return loadedTodos;
  } catch (error) {
    throw new Error(error);
  }
}
