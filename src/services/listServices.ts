import { authApi } from "./axios"

const getAllLists = async (user_id: string) => {
  const response = await authApi.get("/list")
  const lists = response.data

  console.log(lists)

  return lists
}
