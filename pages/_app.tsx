import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import Footer from "../components/base/footer";
import { ParallaxProvider } from "react-scroll-parallax";
import { ApolloProvider } from "@apollo/client";
import { graphqlClient } from "../utils/gqlClient";
import { Global, css } from "@emotion/react";
import customTheme from "../styles/landing/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={graphqlClient}>
      <ParallaxProvider>
        <ChakraProvider resetCSS theme={customTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ParallaxProvider>
    </ApolloProvider>
  );
}

export default MyApp;
