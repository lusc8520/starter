import { Flex, Stack } from "@chakra-ui/react";
import { Header } from "./components/Header.tsx";
import { CatSelection } from "./components/CatSelection.tsx";
import { CatList } from "./components/CatList.tsx";

function App() {
  return (
    <Stack gap="0" h="100vh" w="100vw" bg="bgColor">
      <Header />
      <Flex flexGrow="1" overflow="hidden">
        <Flex flexGrow="1" alignSelf="center" justifyContent="center">
          <CatSelection />
        </Flex>
        <CatList />
      </Flex>
    </Stack>
  );
}

export default App;
