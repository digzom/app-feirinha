import AsyncStorage from "@react-native-async-storage/async-storage"
import { LoginType } from "../types/loginScreenTypes"
import { authApi } from "./axios"

type RegisterUser = {
  name: string
  email: string
  password: string
}

export const signUpUserFn = async (user: RegisterUser) => {
  const response = await authApi.post("/users", user)
  return response.data
}

export const signInUser = async (
  user: LoginType,
): Promise<LoginResponseType> => {
  const response = await authApi.post(
    "https://backend-app-feirinha.gigalixirapp.com/api/users/signin",
    user,
  )

  await AsyncStorage.setItem("token", `Bearer ${response.data.token}`)

  return response.data
}
