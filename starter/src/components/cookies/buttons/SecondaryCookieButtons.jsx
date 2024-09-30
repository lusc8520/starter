import { Button, HStack, Spacer, Text } from "@chakra-ui/react";

export function SecondaryCookieButtons({ cookiesList, onClose, ...rest }) {
  return (
    <HStack
      fontSize={15}
      whiteSpace={"100%"}
      fontWeight={"bold"}
      justifyContent={"space-between"}
    >
      <Button
        as="u"
        size="md"
        variant="ghost"
        _hover={{ bgColor: "white" }}
        onClick={() => {
          cookiesList.set("cookieState", false, {
            path: "/",
          });
          onClose();
        }}
        {...rest}
      >
        ablehnen
      </Button>
      <Spacer />
      <a href="/datenschutz">
        <Text as="u">Datenschutz</Text>
      </a>
    </HStack>
  );
}
