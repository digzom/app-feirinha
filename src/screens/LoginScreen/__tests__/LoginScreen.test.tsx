// import React from "react"
// import {
//   act,
//   fireEvent,
//   render,
//   screen,
// } from "../../../infrastructure/setupTests"
// import LoginScreen from "../LoginScreen"

// jest.useFakeTimers()

// describe("<LoginScreen />", () => {
//   it("renders login screen", async () => {
//     render(<LoginScreen />)

//     const button = screen.getByText("Entrar")
//     const userInput = screen.getByText("Usuário")
//     const passwordInput = screen.getByText("Senha")
//     const UTITitle = screen.getByText("UniTI")

//     expect(button).toBeTruthy()
//     expect(userInput).toBeTruthy()
//     expect(passwordInput).toBeTruthy()
//     expect(UTITitle).toBeTruthy()
//   })

//   it("renders 'Campo obrigatório' when inputs are empty", async () => {
//     render(<LoginScreen />)

//     const button = screen.getByText("Entrar")

//     fireEvent(button, "press")

//     const errorMessage = await screen.findAllByText("Campo obrigatório")

//     expect(errorMessage).toBeTruthy()
//     expect(errorMessage).toHaveLength(2)
//   })

//   it("renders 'Formato de email inválido' when user input format is invalid", async () => {
//     render(<LoginScreen />)

//     const [userInput, _] = await screen.findAllByTestId("input")
//     const button = await screen.getByText("Entrar")

//     await act(async () => fireEvent.changeText(userInput, "83jr3i"))
//     await act(async () => fireEvent.press(button))

//     const errorMessage = screen.getByText("Formato de email inválido")

//     expect(errorMessage).toBeTruthy()
//   })
// })
