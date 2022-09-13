import { z } from "zod"

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Campo obrigatório",
    })
    .trim()
    .email({
      message: "Formato de email inválido",
    }),
  password: z.string({
    required_error: "Campo obrigatório",
  }),
})
