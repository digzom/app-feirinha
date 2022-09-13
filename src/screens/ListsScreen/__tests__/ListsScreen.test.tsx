// import React from "react"
// import { render, screen } from "../../../infrastructure/setupTests"
// import ListsScreen from "../ListsScreen"

// jest.useFakeTimers()

// let mockIsLoading = false

// jest.mock("../../../hooks/useGetPacients", () => ({
//   useGetPacients: () => ({
//     pacients: [
//       {
//         id: "1",
//         bed: "03",
//         name: "Karl Marx",
//         unity_id: 1,
//         created_at: new Date(),
//         updated_at: new Date(),
//       },
//     ],
//     isLoading: mockIsLoading,
//   }),
// }))

// describe("<Dashboard />", () => {
//   it("renders a list with pacients", async () => {
//     render(<ListsScreen />)

//     const pacientList = await screen.findByTestId("pacient-list")
//     const utiBadge = screen.queryAllByText(/UTI/)

//     expect(pacientList).toBeTruthy()
//     expect(utiBadge).toHaveLength(2)
//   })

//   it("doesn't render the list if is loading", async () => {
//     mockIsLoading = true
//     render(<ListsScreen />)

//     const pacientList = await screen.queryByTestId("pacient-list")

//     expect(pacientList).toBeFalsy()
//   })
// })
