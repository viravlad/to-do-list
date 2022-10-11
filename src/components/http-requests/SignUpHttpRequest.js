export async function SignUpHttpRequest(email, password) {
  try {
    const credentials = {
      email: email,
      password: password,
      returnSecuredToken: true,
    };
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDJ44HudopcJeOMCo2U8TqFVA_M68jaTes",
      {
        method: "POST",
        body: JSON.stringify(credentials),
      }
    );
  } catch (error) {
    throw new Error(error.message);
  }
}
