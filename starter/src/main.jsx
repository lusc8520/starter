import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "./theme/Theme.jsx";
import { ContextProvider } from "./context/Context.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Datasecurity } from "./routes/standard/Datasecurity.jsx";
import { Imprint } from "./routes/standard/Imprint.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "*", element: <App /> },
  { path: "/datenschutz", element: <Datasecurity /> },
  { path: "/impressum", element: <Imprint /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
