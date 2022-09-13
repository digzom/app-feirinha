import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ListsScreen from "../screens/ListsScreen"
import { AppStackParamsList } from "../types/routeTypes"

const AppStack = createNativeStackNavigator<AppStackParamsList>()

const AppRoutes = () => {
  return (
    <AppStack.Navigator initialRouteName="Lists">
      <AppStack.Screen
        name="Lists"
        component={ListsScreen}
        options={{ title: "Listas" }}
      />
    </AppStack.Navigator>
  )
}

export default AppRoutes
