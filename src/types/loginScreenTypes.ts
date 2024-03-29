import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AuthStackParamList } from "./routeTypes"

export type LoginType = {
  email: string
  password: string
}

export type LoginProps = NativeStackScreenProps<AuthStackParamList, "Login">
