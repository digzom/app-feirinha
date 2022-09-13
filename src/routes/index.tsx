import { NavigationContainer } from "@react-navigation/native"
import { useStateContext } from "../contexts/userContext"
import AppRoutes from "./app.routes"
import AuthRoutes from "./auth.routes"

const Routes: React.FC = () => {
  const { state, dispatch } = useStateContext()
  return (
    <NavigationContainer>
      {!state.isSignedIn ? <AuthRoutes /> : <AppRoutes />}
    </NavigationContainer>
  )
}

export default Routes
