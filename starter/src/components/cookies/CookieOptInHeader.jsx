import { Text } from "@chakra-ui/react";
import { useAppContext } from "../../context/Context";

export function CookieOptInHeader() {
  const { translate } = useAppContext();

  return (
    <Text
      fontWeight={"extrabold"}
      textAlign={"center"}
      fontSize={28}
      zIndex={3}
    >
      {translate("Cookies erlauben?")}
    </Text>
  );
}
