import { HStack } from "@chakra-ui/react";
import { useAppContext } from "../../context/Context";

export function FooterBar({ children }) {
  const { paddingX } = useAppContext();

  return (
    <HStack
      w={"100%"}
      fontSize={18}
      px={paddingX}
      pt={10}
      spacing={7}
      justifyContent={"right"}
    >
      {children}
    </HStack>
  );
}
