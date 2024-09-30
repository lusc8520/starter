import { Flex, Image, Text } from "@chakra-ui/react";
import viteLogo from "/vite.svg";
import reactLogo from "../assets/react.svg";

export function Header() {
  return (
    <Flex
      justifyContent="space-around"
      paddingY={["1", "2"]}
      bgColor="headerColor"
    >
      <Text fontSize="2xl">Cat</Text>
      <Image src={viteLogo}></Image>
      <Image src={reactLogo}></Image>
    </Flex>
  );
}
