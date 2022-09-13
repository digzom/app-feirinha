import create from "zustand"
import { devtools, NamedSet, persist } from "zustand/middleware"
import { IUser } from "../types/authenticationTypes"

interface AuthStore {
  authUser: IUser | undefined
  setAuthUser: (authUser: any) => void
}

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set) => ({
        authUser: undefined,
        setAuthUser: (authUser) => set({ authUser }),
      }),
      {
        name: "bear-storage",
      },
    ),
  ),
)
