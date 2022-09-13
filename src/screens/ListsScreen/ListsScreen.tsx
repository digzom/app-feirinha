import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Text } from "native-base"
import { Box, FlatList } from "native-base"
import Separator from "../../components/Separator"

const mockedList = [
  {
    name: "Compras Mensais",
    id: "cc8791d6-2f66-43db-817c-b6159177ee28",
    products: [
      {
        category: ["Comida"],
        description: "Delícia yammy",
        id: 2,
        name: "Feijão 3",
      },
    ],
  },
  {
    name: "Compras Mensais",
    id: "cc8791d6-2f66-43db-817c-b6159177ee28",
    products: [
      {
        category: ["Comida"],
        description: "Delícia yammy",
        id: 2,
        name: "Feijão 3",
      },
    ],
  },
  {
    name: "Compras Mensais",
    id: "cc8791d6-2f66-43db-817c-b6159177ee28",
    products: [
      {
        category: ["Comida"],
        description: "Delícia yammy",
        id: 2,
        name: "Feijão 3",
      },
    ],
  },
  {
    name: "Compras Mensais",
    id: "cc8791d6-2f66-43db-817c-b6159177ee28",
    products: [
      {
        category: ["Comida"],
        description: "Delícia yammy",
        id: 2,
        name: "Feijão 3",
      },
    ],
  },
]

const ListsScreen = () => {
  // const { pacients, isLoading } = useGetPacients()

  // if (isLoading)
  //   return (
  //     <Center
  //       justifyContent="center"
  //       alignItems="center"
  //       size={"lg"}
  //       display="flex"
  //       width={"full"}
  //       flex="1"
  //     >
  //       <Spinner color={"indigo.500"} size="lg" />
  //     </Center>
  //   )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flexGrow={1}>
        <FlatList
          testID="lists-list"
          data={mockedList}
          style={{ flex: 1 }}
          // ItemSeparatorComponent={() => <Separator height={4} />}
          renderItem={({ item }) => <Box>{item.name}</Box>}
        />
      </Box>
    </SafeAreaView>
  )
}

export default ListsScreen
