import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button, Text } from "native-base"
import { Box, FlatList } from "native-base"
import Separator from "../../components/Separator"
import axios from "axios"
import { useAuthStore } from "../../zustand/useAuthStore"
import { useStateContext } from "../../contexts/userContext"
import { useMutation } from "@tanstack/react-query"

const ListsScreen = () => {
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
      </Box>
    </SafeAreaView>
  )
}

export default ListsScreen
