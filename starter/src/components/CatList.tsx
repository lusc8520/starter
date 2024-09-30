import { Stack } from "@chakra-ui/react";
import { useCats } from "../context/CatProvider.tsx";
import { CatItem } from "./CatItem.tsx";

export function CatList() {
  const { allCats } = useCats();

  if (allCats.length <= 0) return null;

  return (
    <Stack
      sx={{ scrollbarWidth: "thin" }}
      overflowY="auto"
      borderLeftColor="headerColor"
      borderLeftWidth="10px"
      borderLeftStyle="solid"
      gap="0"
    >
      {allCats.map((cat, index) => (
        <CatItem cat={cat} key={index} />
      ))}
    </Stack>
  );
}
