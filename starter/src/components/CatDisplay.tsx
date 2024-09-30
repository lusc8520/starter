import { useCats } from "../context/CatProvider.tsx";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Image,
  Spinner,
} from "@chakra-ui/react";

export function CatDisplay() {
  const { currentCat, setCatState } = useCats();

  if (currentCat === "loading") return <Spinner color="red" />;
  if (currentCat === "error")
    return (
      <Alert status="error" borderRadius="5" variant="solid">
        <AlertIcon />
        <AlertTitle>Error!</AlertTitle>
        <AlertDescription>Please try again.</AlertDescription>
      </Alert>
    );

  return (
    <Image
      h="100%"
      w="100%"
      objectFit="contain"
      fallback={<Spinner color="red" />}
      onError={() => setCatState("error")}
      src={`https://cdn2.thecatapi.com/images/${currentCat.id}.jpg`}
    />
  );
}
