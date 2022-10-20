export async function updateToDoService(todo, data, userId) {
  try {
    await fetch(
      `https://todo-3ae6d-default-rtdb.firebaseio.com/users/${userId}/todoList/${todo.id}.json`,
      {
        method: "PUT",
        body: JSON.stringify(data),
      }
    );
  } catch (error) {
    throw new Error(error);
  }
}
