import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

export const customTheme = extendTheme({
  ...config,
  colors: {
    bgColor: "#1a202c",
    paperColor: "#011627",
    headerColor: "#4271b9",
  },
  components: {
    Text: {
      baseStyle: {
        color: "white",
      },
    },
  },
});
