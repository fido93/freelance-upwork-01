import React from "react";
import {
  Box,
  Text,
  SimpleGrid,
  Container,
  Stack,
  Flex,
  Image,
  Grid,
  GridItem
} from "@chakra-ui/react";

const Floor = () => {
  const floorplanA =
    "./images/landing/floor/madori-floorplans-c1-c2_120 1.webp";
  const floorplanB = "./images/landing/floor/typeb1-b2 1.webp";
  const IconBathroom = "./images/landing/floor/bath.webp";
  const IconBedroom = "./images/landing/floor/bed.webp";
  return (
    <>
      <Stack
        as="section"
        position="relative"
        alignItems="center"
        backgroundColor="primary"
        pt={10}
        mb={0}
        width="100%"
        paddingTop="300px"
      >
        <Container maxW={"8xl"} zIndex={10} position={"relative"}>
          <Flex
            as="div"
            flexDirection="column"
            position="relative"
            marginBottom="100px"
          >
            <SimpleGrid>
              <Box p={8} position="relative" alignItems="center" display="flex">
                <Text
                  fontSize="160px"
                  lineHeight="240px"
                  position="absolute"
                  left="0"
                  zIndex="0"
                  fontWeight="bold"
                  color="rgba(255, 255, 255, 0.2)"
                  paddingBottom="10px"
                >
                  floor plan
                </Text>
                <Box
                  p={8}
                  position="relative"
                  alignItems="center"
                  display="flex"
                  bottom="-58px"
                  left="-40px"
                >
                  <Box
                    as="div"
                    width="72px"
                    height="2px"
                    backgroundColor="secondary"
                  ></Box>
                  <Text
                    fontSize={["lg"]}
                    pl={5}
                    letterSpacing="6px"
                    textTransform="uppercase"
                    color="secondary"
                    fontFamily="Montserrat"
                    fontWeight="bold"
                  >
                    Floor Plan
                  </Text>
                </Box>
              </Box>
            </SimpleGrid>
          </Flex>
          <Flex as="div" pt={10} pb={10} position="relative">
            <Grid templateColumns="repeat(5, 1fr)" gap={2} position="relative">
              <GridItem position="relative" colSpan={3}>
                <Box marginBottom="80px" position="relative">
                  <Text
                    color="white"
                    fontFamily="Cormorant"
                    fontStyle="normal"
                    fontWeight="bold"
                    fontSize="64px"
                    lineHeight="78px"
                    mb={10}
                  >
                    Type C1, C2
                  </Text>
                  <Text
                    color="white"
                    fontFamily="Montserrat"
                    fontStyle="normal"
                    fontWeight="bold"
                    fontSize="64px"
                    lineHeight="32px"
                  >
                    1,604sf - 1,657sf
                  </Text>
                </Box>
                <Image mt={10} src={floorplanA} alt="floorplanA" />
              </GridItem>
              <GridItem position="relative" colSpan={2}>
                <Box marginBottom="80px" paddingTop="10px" position="relative">
                  <SimpleGrid columns={2} spacing={10} position="relative">
                    <Box>
                      <Image mt={10} src={IconBedroom} alt="IconBedroom" />
                      <Grid
                        templateColumns="repeat(5, 1fr)"
                        gap={2}
                        position="relative"
                      >
                        <GridItem position="relative" colSpan={5}>
                          <Text
                            color="white"
                            fontFamily="Montserrat"
                            fontStyle="normal"
                            fontWeight="bold"
                            fontSize="24px"
                            float="left"
                          >
                            Bedrooms
                          </Text>
                          <Box float="right">
                            <Text
                              color="white"
                              fontFamily="Montserrat"
                              fontStyle="normal"
                              fontWeight="bold"
                              fontSize="24px"
                            >
                              2x
                            </Text>
                          </Box>
                        </GridItem>
                      </Grid>
                    </Box>
                    <Box>
                      <Image mt={10} src={IconBathroom} alt="IconBathroom" />
                      <Grid
                        templateColumns="repeat(5, 1fr)"
                        gap={2}
                        position="relative"
                      >
                        <GridItem position="relative" colSpan={5}>
                          <Text
                            color="white"
                            fontFamily="Montserrat"
                            fontStyle="normal"
                            fontWeight="bold"
                            fontSize="24px"
                            float="left"
                          >
                            Bathroom
                          </Text>
                          <Box float="right">
                            <Text
                              color="white"
                              fontFamily="Montserrat"
                              fontStyle="normal"
                              fontWeight="bold"
                              fontSize="24px"
                            >
                              2x
                            </Text>
                          </Box>
                        </GridItem>
                      </Grid>
                    </Box>
                  </SimpleGrid>
                </Box>
                <Image mt={10} src={floorplanB} alt="floorplanB" />
              </GridItem>
            </Grid>
          </Flex>
        </Container>
      </Stack>
    </>
  );
};

export default Floor;
