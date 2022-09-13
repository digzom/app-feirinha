import { render } from "@testing-library/react-native"
import { NativeBaseProvider } from "native-base"
import React, { ReactElement } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { NavigationContainer } from "@react-navigation/native"

const client = new QueryClient()

type Props = {
  children: JSX.Element
}

const AllTheProviders: React.FC<Props> = ({
  children,
}: {
  children: ReactElement
}) => (
  <NavigationContainer>
    <NativeBaseProvider
      initialWindowMetrics={{
        frame: {
          width: 320,
          height: 640,
          x: 0,
          y: 0,
        },
        insets: {
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
        },
      }}
    >
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </NativeBaseProvider>
  </NavigationContainer>
)

const customRender = (ui: any, options?: any) => {
  render(ui, { wrapper: AllTheProviders, ...options })
}

export * from "@testing-library/react-native"
export { customRender as render }
