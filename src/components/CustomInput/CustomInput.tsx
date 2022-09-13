import { FormControl, Input } from "native-base"
import React from "react"
import { Controller } from "react-hook-form"
import { CustomInputType } from "../../types/customInputTypes"

export const CustomInput = ({
  errors,
  control,
  name,
  label,
  required,
  inputLeftElement,
  inputProps,
  type,
}: CustomInputType) => (
  <FormControl isRequired={required} isInvalid={name in errors}>
    <FormControl.Label>{label}</FormControl.Label>
    <Controller
      control={control}
      render={({ field: { onBlur, onChange, value } }) => (
        <Input
          testID="input"
          rounded={"md"}
          bg={"white"}
          onBlur={onBlur}
          onChangeText={(value) => onChange(value)}
          value={value}
          InputLeftElement={inputLeftElement}
          h={"16"}
          type={type}
          fontSize={"lg"}
          {...inputProps}
        />
      )}
      name={name}
    />
    <FormControl.ErrorMessage>{errors[name]?.message}</FormControl.ErrorMessage>
  </FormControl>
)

export default CustomInput
