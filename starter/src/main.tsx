import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "./theme/Theme.tsx";
import { CatProvider } from "./context/CatProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={customTheme}>
      <CatProvider>
        <App />
      </CatProvider>
    </ChakraProvider>
  </StrictMode>,
);
