import { Box, Text, VStack } from "@chakra-ui/react";

export function HeadLine({
  text,
  size = ["25px", "25px", "32px", "35px", "45px"],
}) {
  return (
    <VStack>
      <Text textAlign={"center"} fontSize={size}>
        {text}
      </Text>
      <Box w={"60%"} h={1} bg={"mainColor"} />
    </VStack>
  );
}
