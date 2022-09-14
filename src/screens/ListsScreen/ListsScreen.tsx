import { Box, Button } from "native-base"
import { SafeAreaView } from "react-native-safe-area-context"
import { useUserContext } from "../../contexts/userContext"

const ListsScreen = () => {
  const { dispatch } = useUserContext()
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
        {/* <FlatList
          testID="lists-list"
          data={mockedList}
          style={{ flex: 1 }}
          // ItemSeparatorComponent={() => <Separator height={4} />}
          renderItem={({ item }) => <Box>{item.name}</Box>}
        /> */}
        <Button onPress={() => dispatch({ type: "SIGN_OUT", payload: null })}>
          logout
        </Button>
      </Box>
    </SafeAreaView>
  )
}

export default ListsScreen
