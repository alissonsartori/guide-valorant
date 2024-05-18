import React from "react";
import ReactDOM from "react-dom/client";
import App from "./router.js";
import { ChakraProvider } from "@chakra-ui/react";
import AppHeader from "./Components/Header/AppHeader.tsx";
import AppFooter from "./Components/Footer/AppFooter.tsx";

const rootElement = document.getElementById("root") as HTMLElement;

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <ChakraProvider>
      <React.StrictMode>
        <AppHeader />
        <App />
        <AppFooter />
      </React.StrictMode>
    </ChakraProvider>
  );
} else {
  console.error("Root element with id 'root' not found in the document.");
}
