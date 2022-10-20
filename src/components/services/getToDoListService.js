export async function getToDoListService(userId) {
  try {
    const response = await fetch(
      `https://todo-3ae6d-default-rtdb.firebaseio.com/users/${userId}/todoList.json`,
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
    console.log(data);
    return loadedTodos;
  } catch (error) {
    throw new Error(error);
  }
}
