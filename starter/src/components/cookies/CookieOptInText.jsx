import { Text } from "@chakra-ui/react";
import { useAppContext } from "../../context/Context";
import { cookieText } from "./cookieText";

export function CookieOptInText({ ...rest }) {
  const { translate } = useAppContext();

  return (
    <Text fontSize={18} maxW={"60vw"} textAlign={"center"} pb={10} {...rest}>
      {translate(cookieText)}
    </Text>
  );
}
