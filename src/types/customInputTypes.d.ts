import { InterfaceInputProps } from "native-base/lib/typescript/components/primitives/Input/types"
import {
  FieldErrorsImpl,
  DeepRequired,
  FieldValues,
  Control,
} from "react-hook-form"

export type CustomInputType = {
  errors: FieldErrorsImpl<DeepRequired<FieldValues>>
  control: Control<FieldValues, object>
  name: string
  label: string
  type?: "text" | "password"
  required: boolean
  inputLeftElement?: JSX.Element | JSX.Element[] | undefined
  inputProps?: InterfaceInputProps
}
