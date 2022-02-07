import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import Footer from "../components/base/footer";
import { ParallaxProvider } from "react-scroll-parallax";
import { ApolloProvider } from "@apollo/client";
import { graphqlClient } from "../utils/gqlClient";
import { Global, css } from "@emotion/react";
import customTheme from "../styles/landing/theme";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [pageURL, setPageURL] = useState<string>("");
  useEffect(() => {
    const url = window.location.pathname;
    const regex_url = url.replace(/\//g, "");
    setPageURL(regex_url);
  }, []);
  return (
    <ApolloProvider client={graphqlClient}>
      <ParallaxProvider>
        {pageURL == "landing" ? (
          <ChakraProvider theme={customTheme}>
            <Component {...pageProps} />
          </ChakraProvider>
        ) : (
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        )}
      </ParallaxProvider>
    </ApolloProvider>
  );
}

export default MyApp;
