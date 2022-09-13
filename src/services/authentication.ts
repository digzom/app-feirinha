import axios from "axios"
import { LoginType } from "../types/loginScreenTypes"

type RegisterUser = {
  name: string
  email: string
  password: string
}

type LoginUser = {
  name: string
  email: string
  password: string
}

const BASE_URL = process.env.BASE_URL

export const authApi = axios.create({
  baseURL: "https://backend-app-feirinha.gigalixirapp.com/api",
  withCredentials: true,
})

authApi.defaults.headers.common["Content-Type"] = "application/json"

authApi.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    console.log(error)
  },
)

export const signUpUserFn = async (user: RegisterUser) => {
  const response = await authApi.post("/users", user)
  return response.data
}

export const signInUser = async (user: LoginType) => {
  console.log(user)
  const response = await authApi.post("/users/signin", user)
  return response.data
}
