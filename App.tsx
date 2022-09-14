import { StatusBar } from "expo-status-bar"
import { NativeBaseProvider } from "native-base"
import React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Routes from "./src/routes"
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto"
import AppLoading from "expo-app-loading"

import { StateContextProvider } from "./src/contexts/userContext"

const client = new QueryClient()

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_500Medium,
  })

  if (!fontsLoaded) return <AppLoading />

  return (
    <NativeBaseProvider>
      <QueryClientProvider client={client}>
        <StatusBar style="auto" />
        <StateContextProvider>
          <Routes />
        </StateContextProvider>
      </QueryClientProvider>
    </NativeBaseProvider>
  )
}
