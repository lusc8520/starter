import { Stack } from "@chakra-ui/react";
import { useCats } from "../context/CatProvider.tsx";
import { CatItem } from "./CatItem.tsx";

export function CatList() {
  const { allCats } = useCats();

  if (allCats.length <= 0) return null;

  return (
    <Stack
      sx={{
        "::-webkit-scrollbar": {
          width: "8px",
        },
        "::-webkit-scrollbar-track": {
          backgroundColor: "green",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "black",
          borderRadius: "8px",
        },
        scrollbarColor: "black green",
      }}
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
