import { CatPicture, useCats } from "../context/CatProvider.tsx";
import { Box, Flex, IconButton, Image } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

export function CatItem({ cat }: { cat: CatPicture }) {
  const { deleteCat, setCatState, currentCat } = useCats();

  const isCurrent = cat.id === (currentCat as CatPicture)?.id;

  return (
    <Flex
      onClick={() => setCatState(cat)}
      padding="3"
      gap="3"
      backgroundColor={isCurrent ? "headerColor" : "inherit"}
      alignItems="center"
      _hover={{ cursor: "pointer", backgroundColor: "headerColor" }}
      transition={"background-color 0.15s"}
    >
      <Box w="100px" h="50px">
        <Image
          objectFit="cover"
          h="100%"
          w="100%"
          src={`https://cdn2.thecatapi.com/images/${cat.id}.jpg`}
        />
      </Box>
      <IconButton
        size="sm"
        colorScheme="red"
        isRound={true}
        onClick={(e) => {
          e.stopPropagation();
          deleteCat(cat.id);
        }}
        aria-label="delete"
        icon={<DeleteIcon />}
      />
    </Flex>
  );
}
