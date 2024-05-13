import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Router.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import AppHeader from "../src/Components/Header/AppHeader.jsx"
import AppFooter from "../src/Components/Footer/AppFooter.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <React.StrictMode>
      <AppHeader/>
      <App />
      <AppFooter/>
    </React.StrictMode>
  </ChakraProvider>
);
