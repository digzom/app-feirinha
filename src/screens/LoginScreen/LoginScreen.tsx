import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigation } from "@react-navigation/native"
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
import { TouchableOpacity } from "react-native"
import CustomInput from "../../components/CustomInput"
import { loginSchema } from "../../schemas/loginSchema"
import { LoginProps, LoginType } from "../../types/loginScreenTypes"

const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) })
  const { navigation } = useNavigation<LoginProps>()

  const onSubmit = async (data: LoginType) => {
    console.log(data)
    navigation.navigate("Login")
  }

  return (
    <Center h="full">
      <Heading color={"info.400"} position={"absolute"} top={"1/6"}>
        UniTI
      </Heading>
      <VStack w={"full"} p={5}>
        <Box>
          <CustomInput
            name="username"
            errors={errors}
            control={control}
            label="Usuário"
            key={"username"}
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
