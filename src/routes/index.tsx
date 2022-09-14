import { NavigationContainer } from "@react-navigation/native"
import { useUserContext } from "../contexts/userContext"
import AppRoutes from "./app.routes"
import AuthRoutes from "./auth.routes"

const Routes: React.FC = () => {
  const { state, dispatch } = useUserContext()
  return (
    <NavigationContainer>
      {!state.isSignedIn ? <AuthRoutes /> : <AppRoutes />}
    </NavigationContainer>
  )
}

export default Routes
