import { NavigationContainer } from "@react-navigation/native"
import AppRoutes from "./app.routes"
import AuthRoutes from "./auth.routes"

const isLogged = true

const Routes: React.FC = () => (
  <NavigationContainer>
    {!isLogged ? <AuthRoutes /> : <AppRoutes />}
  </NavigationContainer>
)

export default Routes
