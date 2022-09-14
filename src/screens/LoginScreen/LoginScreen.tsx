import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigation } from "@react-navigation/native"
import axios from "axios"
import { MaterialIcons } from "expo-vector-icons"
import {
  Box,
  Button,
  Center,
  Heading,
  Icon,
  Spacer,
  Text,
  VStack,
} from "native-base"
import React from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { TouchableOpacity } from "react-native"
import CustomInput from "../../components/CustomInput"
import { loginSchema } from "../../schemas/loginSchema"
import { LoginProps, LoginType } from "../../types/loginScreenTypes"
import { useUserContext } from "../../contexts/userContext"
import { signInUser } from "../../services/authentication"

const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) })
  const { state, dispatch } = useUserContext()
  const { navigation } = useNavigation<LoginProps>()

  const onSubmit = async (loginInput: LoginType) => {
    const user = await signInUser(loginInput)
    dispatch({ type: "SIGN_IN", payload: user.token })
    navigation.navigate("Login")
  }

  return (
    <Center h="full">
      <Heading color={"info.400"} position={"absolute"} top={"1/6"}>
        Feirinha
      </Heading>
      <VStack w={"full"} p={5}>
        <Box>
          <CustomInput
            name="email"
            errors={errors}
            control={control}
            label="Usuário"
            key={"email"}
            required
            inputProps={{ variant: "underlined" }}
            inputLeftElement={
              <Icon
                ml={4}
                mr={3}
                size={5}
                as={<MaterialIcons name="person" />}
              />
            }
          />
          <Spacer m={1} />
          <CustomInput
            name="password"
            errors={errors}
            control={control}
            label="Senha"
            key={"password"}
            required
            type="password"
            inputProps={{ variant: "underlined" }}
            inputLeftElement={
              <Icon ml={4} mr={3} size={5} as={<MaterialIcons name="lock" />} />
            }
          />
          <Spacer m={3.5} />
          <Button
            fontSize={"md"}
            h={"16"}
            rounded={"md"}
            w={"full"}
            color={"primary"}
            onPress={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
          >
            <Text fontSize={"md"} color="white">
              Entrar
            </Text>
          </Button>
        </Box>
      </VStack>
      <Box safeAreaBottom position={"absolute"} bottom={9}>
        <TouchableOpacity>
          <Text color={"gray.500"}>
            Não tem uma conta? Toque aqui para cadastrar
          </Text>
        </TouchableOpacity>
      </Box>
    </Center>
  )
}

export default LoginScreen
