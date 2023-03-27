// pages/_app.js
import { ChakraProvider, Container, theme } from "@chakra-ui/react";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="xl" pt={8}>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
