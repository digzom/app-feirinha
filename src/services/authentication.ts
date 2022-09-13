import { LoginType } from "../types/loginScreenTypes"

export function signIn(payload: LoginType) {
  if (
    payload.username !== "diegomaradona@email.com" ||
    payload.password !== "123"
  ) {
    return "Usuário e/ou senha incorretos"
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "154",
        user: {
          name: "Diego",
          email: "diegomaradona@email.com.br",
        },
      })
    }, 2000)
  })
}
