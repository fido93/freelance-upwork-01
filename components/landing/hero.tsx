import React from "react";
import {
  Box,
  Text,
  Container,
  Stack,
  Flex,
  Image,
  Button,
  Grid,
  GridItem
} from "@chakra-ui/react";
import Navbar from "../base/landing/navbar";

const Hero = () => {
  const apartment = "./images/landing/hero/hero img.webp";
  const wavemountain = "./images/landing/hero/black mountain.webp";
  return (
    <>
      <Stack as="section" position="relative">
        <Box backgroundImage="url('images/landing/hero/hero bg.webp')">
          <Container maxW={"8xl"} zIndex={10} padding={['0 30px','inherit']} position={"relative"}>
            <Navbar pt={"3em"} pb={{ base: "3em", md: "6em" }} />
            <Flex as="div" pt={[0, 10]} pb={10} position="relative">
              <Grid
                display={["block", "grid"]}
                templateColumns="repeat(5, 1fr)"
                gap={2}
                position="relative"
              >
                <GridItem position="relative" colSpan={2}>
                  <Box
                    p={[0, 8]}
                    position="relative"
                    alignItems="center"
                    display={["block", "flex"]}
                  >
                    <Box
                      p={[3, 8]}
                      position="relative"
                      alignItems="center"
                      display="flex"
                      bottom={["none", "-58px"]}
                      left={["0", "-40px"]}
                    >
                      <Box
                        as="div"
                        width={["40px", "72px"]}
                        height="2px"
                        backgroundColor="secondary"
                      ></Box>
                      <Text
                        fontSize={["sm", "lg"]}
                        pl={5}
                        letterSpacing="6px"
                        textTransform="uppercase"
                        color="secondary"
                        fontFamily="Montserrat"
                        fontWeight="bold"
                      >
                        A Living Experience
                      </Text>
                    </Box>
                  </Box>
                  <Box marginBottom="80px" position="relative">
                    <Text
                      color="white"
                      fontFamily="Cormorant"
                      fontStyle="normal"
                      fontWeight="bold"
                      fontSize={["4xl", "6xl"]}
                      lineHeight="78px"
                      mb={[5, 10]}
                    >
                      DATUM JELATEK
                    </Text>
                    <Button
                      padding={['26px 0','30px']}
                      width={['40%',"280px"]}
                      border={['2px solid #ffffff',"4px solid #FFFFFF"]}
                      backgroundColor="transparent"
                      fontSize={['20px','30px']}
                      textTransform="capitalize"
                      color="white"
                    >
                      Contact Us
                    </Button>
                  </Box>
                </GridItem>
                <GridItem position="relative" colSpan={3}>
                  <Box position="relative">
                    <Image
                      mt={10}
                      src={apartment}
                      alt="apartment"
                      width="100%"
                      marginRight="auto"
                      marginLeft="auto"
                      marginTop="-60px"
                    />
                  </Box>
                </GridItem>
              </Grid>
            </Flex>
          </Container>
        </Box>
        <Box as="div" marginTop="-300px !important" zIndex="10">
          <Image src={wavemountain} alt="wavemountain" />
        </Box>
      </Stack>
    </>
  );
};

export default Hero;
