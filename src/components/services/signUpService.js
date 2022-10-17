export async function SignUpHttpRequest(email, password) {
  const credentials = {
    email: email,
    password: password,
    returnSecureToken: true,
  };

  try {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDJ44HudopcJeOMCo2U8TqFVA_M68jaTes",
      {
        method: "POST",
        body: JSON.stringify(credentials),
      }
    );
    if (!response.ok) {
      const errorBody = await response.json();
      throw new Error(errorBody.error.message);
    }
  } catch (error) {
    throw error;
  }
}
