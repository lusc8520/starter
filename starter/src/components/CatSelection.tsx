import { Button, Flex, Stack } from "@chakra-ui/react";
import { CatPicture, useCats } from "../context/CatProvider.tsx";
import { CheckIcon, RepeatIcon } from "@chakra-ui/icons";
import { CatDisplay } from "./CatDisplay.tsx";

export function CatSelection() {
  const { currentCat, fetchCat, saveCat } = useCats();

  const imageWrapperSizes = ["200", "300", "400", "500"];

  return (
    <Stack
      bgColor="paperColor"
      padding="4"
      gap="3"
      borderRadius="10"
      alignItems="center"
    >
      <Stack
        h={imageWrapperSizes}
        w={imageWrapperSizes}
        justifyContent="center"
        alignItems="center"
      >
        <CatDisplay />
      </Stack>

      <Flex gap="3">
        <Button
          onClick={() => saveCat(currentCat as CatPicture)}
          size="lg"
          w="105px"
          leftIcon={<CheckIcon />}
          colorScheme="green"
          isDisabled={currentCat === "loading" || currentCat === "error"}
        >
          Save
        </Button>
        <Button
          size="lg"
          w="105px"
          leftIcon={<RepeatIcon />}
          colorScheme="blue"
          onClick={fetchCat}
          isDisabled={currentCat === "loading"}
        >
          Reload
        </Button>
      </Flex>
    </Stack>
  );
}
