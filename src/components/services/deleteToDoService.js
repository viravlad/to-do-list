export async function deleteToDoservice(todo, userId) {
  try {
    return await fetch(
      `https://todo-3ae6d-default-rtdb.firebaseio.com/users/${userId}/todoList/${todo.id}.json`,
      {
        method: "DELETE",
      }
    );
  } catch (error) {
    throw new Error(error);
  }
}
