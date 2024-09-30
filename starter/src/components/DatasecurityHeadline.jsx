import { Heading, Text } from "@chakra-ui/react";
import { useAppContext } from "../context/Context";
import { mainColor } from "../theme/Theme";

export function DatasecurityHeadline({ as = "h1", text, ...rest }) {
  const { translate } = useAppContext();
  return (
    <Heading
      pt={5}
      as={as}
      style={{ color: mainColor, textDecoration: "underline" }}
      {...rest}
    >
      <Text color="black">{translate(text)}</Text>
    </Heading>
  );
}
