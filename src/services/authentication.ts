import axios from "axios"

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
  baseURL: BASE_URL,
  withCredentials: true,
})

authApi.defaults.headers.common["Content-Type"] = "application/json"

authApi.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config
    const errMessage = error.response.data.message as string
    if (errMessage.includes("not logged in") && !originalRequest._retry) {
      originalRequest._retry = true
      return authApi(originalRequest)
    }
    return Promise.reject(error)
  },
)

export const signUpUserFn = async (user: RegisterUser) => {
  const response = await authApi.post("/users", user)
  return response.data
}

export const signInUser = async (user: LoginUser) => {
  const response = await authApi.post("/users/signin", user)
  return response.data
}
