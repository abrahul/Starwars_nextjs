// pages/_app.js
import { ChakraProvider, Container, theme } from "@chakra-ui/react";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
        <Component {...pageProps} />   
    </ChakraProvider>
  );
}

export default MyApp;
