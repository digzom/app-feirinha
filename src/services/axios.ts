import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"

const { BASE_URL } = process.env

export const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
})

authApi.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("token")

  if (token && config.headers) {
    config.headers["Authorization"] = token
  }

  return config
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
