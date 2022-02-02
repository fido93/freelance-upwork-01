import React from "react";
import {
  Box,
  Text,
  SimpleGrid,
  Button,
  useStyleConfig,
} from "@chakra-ui/react";
import Navbar from "../base/navbar";

const Experience = () => {
  const styles = useStyleConfig("HeroTitleBox", {});
  return (
    <Box bg="#000000" w="100%" pt={10} pb={10} pr={10} pl={10} color="white">
      <Navbar />
      <SimpleGrid columns={2} spacing={10}>
        <Box __css={styles}>
          <Text>A Living Experience</Text>
          <Text>Datum Jelatek</Text>
          <Button colorScheme="teal" size="lg">
            Contact Us
          </Button>
        </Box>
        <Box p={10}>
          <Text fontSize="50px" color="tomato">
            I'm using a custom font-size value for this text
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Experience;
