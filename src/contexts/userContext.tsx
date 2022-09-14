import React, { useReducer } from "react"
import { IUser } from "../types/authenticationTypes"

type State = {
  authUser: IUser | null
  isSignedIn: boolean
}

type Action = {
  type: string
  payload: IUser | null | string
}

type Dispatch = (action: Action) => void

const initialState: State = {
  authUser: null,
  isSignedIn: false,
}

type StateContextProviderProps = { children: React.ReactNode }

const StateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined)

const stateReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SIGN_IN": {
      return {
        ...state,
        authUser: action.payload,
        isSignedIn: true,
      }
    }
    case "SIGN_OUT": {
      return {
        ...state,
        authUser: null,
        isSignedIn: false,
      }
    }
    default: {
      throw new Error(`Unhandled action type`)
    }
  }
}

const StateContextProvider = ({ children }: StateContextProviderProps) => {
  const [state, dispatch] = useReducer(stateReducer, initialState)
  const value = { state, dispatch }
  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}

const useUserContext = () => {
  const context = React.useContext(StateContext)

  if (context) {
    return context
  }

  throw new Error(`useUserContext must be used whitin a StateContextProvider`)
}

export { StateContextProvider, useUserContext }
