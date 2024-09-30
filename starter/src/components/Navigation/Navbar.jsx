import { HStack } from "@chakra-ui/react";
import { useAppContext } from "../../context/Context";

export function Navbar({ children }) {
  const { paddingX } = useAppContext();
  return (
    <HStack
      w={"100%"}
      bg={"white"}
      h={["50px", "70px", "70px", "70px"]}
      px={paddingX}
      zIndex={9999}
      position={"fixed"}
      top={0}
      borderBottomColor={"mainColor"}
      borderBottomWidth={0.3}
      boxShadow={`0px -1px 10px 2px mainColor`}
    >
      {children}
    </HStack>
  );
}
