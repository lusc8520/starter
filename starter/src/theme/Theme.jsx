import { extendTheme } from "@chakra-ui/react";
import { generateColorset } from "./newColor";

export const mainColor = "#EF243C";

export const customTheme = extendTheme({
  colors: {
    mainColor: mainColor,
  },
});
