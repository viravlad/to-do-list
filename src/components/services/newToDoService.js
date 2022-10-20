export async function newToDoService(data, userId) {
  try {
    return await fetch(
      `https://todo-3ae6d-default-rtdb.firebaseio.com/users/${userId}/todoList.json`,
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );
  } catch (error) {
    throw new Error(error);
  }
}
