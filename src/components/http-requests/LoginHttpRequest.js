export async function LoginHttpRequest(email, password) {
  const credentials = {
    email: email,
    password: password,
    returnSecureToken: true,
  };
  try {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDJ44HudopcJeOMCo2U8TqFVA_M68jaTes",
      {
        method: "POST",
        body: JSON.stringify(credentials),
      }
    );
    const data = await response.json();
    return data.idToken;
  } catch (error) {
    throw new Error(error);
  }
}
