import React from "react";
import {
  Box,
  Text,
  SimpleGrid,
  Container,
  Stack,
  Flex,
  Image,
  AspectRatio,
  Heading,
  Button,
  Grid,
  GridItem
} from "@chakra-ui/react";
import Navbar from "../base/landing/navbar";

const Experience = () => {
  const apartment = "./images/landing/hero/hero img.webp";
  const wavemountain = "./images/landing/hero/black mountain.webp";
  const skyring2 = "./images/landing/skyring/ring 2.webp";
  const skyring = "./images/landing/skyring/ring 1.webp";
  const goldust = "./images/landing/concept/gold dust.webp";
  const floorplanA =
    "./images/landing/floor/madori-floorplans-c1-c2_120 1.webp";
  const floorplanB = "./images/landing/floor/typeb1-b2 1.webp";
  const IconBathroom = "./images/landing/floor/bath.webp";
  const IconBedroom = "./images/landing/floor/bed.webp";
  const imageGalleryBg = "./images/landing/gallery/bg/galleryBg.webp";
  const gallerySection = [
    { uri: "./images/landing/gallery/galleryImg/1.webp" },
    { uri: "./images/landing/gallery/galleryImg/2.webp" },
    { uri: "./images/landing/gallery/galleryImg/3.webp" },
    { uri: "./images/landing/gallery/galleryImg/4.webp" },
    { uri: "./images/landing/gallery/galleryImg/5.webp" },
    { uri: "./images/landing/gallery/galleryImg/6.webp" },
    { uri: "./images/landing/gallery/galleryImg/7.webp" },
    { uri: "./images/landing/gallery/galleryImg/8.webp" },
  ];
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
      <Stack
        as="section"
        position="relative"
        alignItems="center"
        backgroundColor="primary"
        pt={10}
        mb={0}
        width="100%"
        zIndex={['30']}
      >
        <Container maxW={"8xl"} padding={['0 30px','inherit']} zIndex={10} position={"relative"}>
          <Flex
            as="div"
            flexDirection="column"
            position="relative"
            marginBottom="100px"
          >
            <SimpleGrid>
              <Box p={8} position="relative" alignItems="center" display="flex">
                <Text
                  fontSize={["86px","160px"]}
                  lineHeight="240px"
                  position="absolute"
                  left="0"
                  zIndex="0"
                  fontWeight="bold"
                  color="rgba(255, 255, 255, 0.2)"
                  paddingBottom="10px"
                >
                  Sky Ring
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
                    Sky Ring
                  </Text>
                </Box>
              </Box>
            </SimpleGrid>
          </Flex>
          <Flex as="div" pt={10} pb={10} position="relative">
            <Grid templateColumns="repeat(5, 1fr)" gap={2} position="relative">
              <GridItem position="relative" colSpan={2}>
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
                    Be closer to the sky
                  </Text>
                  <Text
                    lineHeight="32px"
                    color="white"
                    fontSize="18px"
                    fontFamily="Montserrat"
                    mb={10}
                  >
                    The Sky Ring is inspired by four lily pads that represents
                    the four tour residential towers, acting as symbolic ring
                    that links the towers together. It is to create a common
                    point for those residing here to have different recreation
                    and communication platforms.
                  </Text>
                </Box>
              </GridItem>
              <GridItem position="relative" colSpan={3}>
                <Box position="relative" overflow="hidden">
                  <Image
                    mt={10}
                    src={skyring}
                    alt="floorplanB"
                    position="relative"
                    zIndex="1"
                    width="100%"
                  />
                  <Image
                    mt={10}
                    src={skyring2}
                    alt="floorplanB"
                    position="absolute"
                    top="0"
                    left="15px"
                    zIndex="0"
                  />
                </Box>
              </GridItem>
            </Grid>
          </Flex>
        </Container>
      </Stack>
      <Stack as="section" backgroundColor="primary" paddingTop="100px">
        <Box
          bottom="-10em"
          position="relative"
          zIndex="2"
          flexDirection="column"
          justifyContent="space-between"
          px={[2, 6, 6]}
          py={2}
          pt={10}
          pb={10}
          mx="auto"
          as="div"
        >
          <Container maxW={"8xl"} zIndex={10} position={"relative"}>
            <Flex as="div" flexDirection="column" position="relative" mb={7}>
              <SimpleGrid columns={2} spacing={10}>
                <Box p={8}></Box>
                <Box
                  p={8}
                  position="relative"
                  alignItems="center"
                  display="flex"
                >
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
                    Concept
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
                      Concept
                    </Text>
                  </Box>
                </Box>
              </SimpleGrid>
            </Flex>
            <Flex as="div">
              <Text
                fontFamily="Cormorant"
                color="white"
                fontSize={["sm", "md", "6xl", "6xl"]}
                mb={6}
                textTransform="capitalize"
                width="50%"
              >
                Luxurious and Convenience
              </Text>
            </Flex>
            <Flex as="div" mb={10}>
              <Text
                lineHeight="32px"
                color="white"
                fontSize="18px"
                fontFamily="Montserrat"
                mb={10}
              >
                Datum Jelatek, with a gross development value of RM1.2 billion,
                is an integrated development and presents the epitome of urban
                living shares an excellent location within prestigious Embassy
                Row, enjoying the superb surrounding neighbourhood. MNCs and
                also the upcoming KL City largest financial hub TRX is all
                within minutes reach. Indulge in the luxury & quality lifestyle
                living at Datum Jelatek’s residence with its extraordinary
                spacious and long balcony design enjoying mesmerising view from
                the comfort of your own home, complimented with quality
                interiors fixtures that is meticulously picked and designed.
              </Text>
            </Flex>
          </Container>
        </Box>
      </Stack>
      <Stack as="section" position="relative" background="primary">
        <Container maxW={"8xl"} zIndex={10} position={"relative"}>
          <Flex
            as="div"
            mt={10}
            flexDirection="column"
            position="relative"
            mb={7}
          >
            <Image margin="0" src={goldust} alt="goldust" paddingTop="50px" />
          </Flex>
        </Container>
      </Stack>
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
      <Stack as="section" backgroundColor="primary">
        <Box
          bottom="-10em"
          position="relative"
          zIndex="2"
          flexDirection="column"
          justifyContent="space-between"
          px={[2, 6, 6]}
          py={2}
          pt={10}
          pb={10}
          mx="auto"
          as="div"
        >
          <Container maxW={"8xl"} zIndex={10} position={"relative"}>
            <Flex as="div" flexDirection="column" position="relative" mb={7}>
              <SimpleGrid columns={2} spacing={10}>
                <Box p={8}></Box>
                <Box
                  p={8}
                  position="relative"
                  alignItems="center"
                  display="flex"
                >
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
                    Gallery
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
                      Gallery
                    </Text>
                  </Box>
                </Box>
              </SimpleGrid>
            </Flex>
            <Flex as="div">
              <Text
                fontFamily="Cormorant"
                color="white"
                fontSize={["sm", "md", "6xl", "6xl"]}
                mb={6}
                textTransform="capitalize"
                width="60%"
              >
                A stylish Accomodation
              </Text>
            </Flex>
            <Flex as="div">
              <Text
                lineHeight="32px"
                color="white"
                fontSize="18px"
                fontFamily="Montserrat"
              >
                Each individual unit is equipped with partial premium
                furnishing, which makes it easier for the residents to complete
                the unit with only loose furniture and interior deco. Premium
                furnishing listing includes full top & bottom kitchen cabinet,
                cooker hob & hood, 2-in 1 microwave oven, refrigerator, 2-in 1
                washer dryer, air-conditioning for all rooms, wardrobe for all
                bedrooms, hot water storage for all bathrooms and Smart Home
                Community Apps ready. This development is secured with 24 hours
                6 tiers security surveillance, where each home also comes with
                an exclusive Digital Door Lock at the main entrance with 3-in-1
                features.
              </Text>
            </Flex>
          </Container>
        </Box>
      </Stack>
      <Stack as="section" position="relative">
        <Box
          as="div"
          position="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          background="linear-gradient(to top, rgba(22, 22, 22, 0.1) 0%, rgba(22, 22, 22, 0.75) 75%, #000000 100%)"
        ></Box>
        <Image margin="0" src={imageGalleryBg} alt={imageGalleryBg} />
      </Stack>
      <Stack
        as="section"
        position="relative"
        alignItems="center"
        backgroundColor="primary"
        pb={0}
        mb={0}
        width="100%"
      >
        <Container maxW={"8xl"} zIndex={10} position={"relative"}>
          <Flex as="div" display="flex" width="100%" flexWrap="wrap">
            {gallerySection.map((a, index) => (
              <Box width="50%" p={10} key={index}>
                <Image src={a.uri} alt="gallery" />
              </Box>
            ))}
          </Flex>
        </Container>
      </Stack>
      <Stack as="section">
        <iframe
          style={{ position: "relative", height: "1000px" }}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          src="https://www.youtube.com/embed/Q79dvrQ7qFg"
          allowFullScreen
        />
      </Stack>
      <Stack
        as="section"
        backgroundColor="primary"
        paddingTop="300px"
        position={"relative"}
      >
        <Box as="div" position={"relative"}>
          <Container maxW={"8xl"} zIndex={10} position={"relative"}>
            <Flex
              as="div"
              flexDirection="column"
              position="absolute"
              bottom="-260px"
              width="100%"
            >
              <Flex as="div" flexDirection="column" position="relative" mb={7}>
                <SimpleGrid>
                  <Box
                    p={8}
                    position="relative"
                    alignItems="center"
                    display="flex"
                  >
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
                      Contact Us
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
                        Contact Us
                      </Text>
                    </Box>
                  </Box>
                </SimpleGrid>
              </Flex>
              <Flex as="div">
                <Heading
                  fontFamily="Cormorant"
                  color="white"
                  fontSize={["sm", "md", "5xl", "5xl"]}
                  mb={6}
                  lineHeight="77.5px"
                >
                  We’d love to hear from you
                </Heading>
              </Flex>
              <Flex as="div" flexDirection="column">
                <Text
                  lineHeight="32px"
                  color="white"
                  fontSize="18px"
                  fontFamily="Montserrat"
                  fontWeight="700"
                  marginBottom="50px"
                >
                  We are here to help and guide you so that you can book with
                  peace in mind
                </Text>
                <Button
                  padding="30px"
                  width="280px"
                  border="4px solid #FFFFFF"
                  backgroundColor="transparent"
                  fontSize="30px"
                  textTransform="capitalize"
                  color="white"
                >
                  Contact Us
                </Button>
              </Flex>
            </Flex>
          </Container>
        </Box>
      </Stack>
      <Stack
        as="section"
        backgroundColor="primary"
        pb={8}
        flex={1}
        zIndex={0}
        display={{ base: "none", lg: "flex" }}
        backgroundImage="url('images/value.webp')"
        backgroundSize={"cover"}
        backgroundPosition="340px"
        backgroundRepeat="no-repeat"
        paddingBottom="200px"
        paddingTop="200px"
        position="relative"
        height="700px"
      >
        <Box
          as="div"
          position="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          background="linear-gradient(to left, rgba(22, 22, 22, 0) 0%, rgba(22, 22, 22, 0.4) -1%, #000000 82%)"
        ></Box>
        <Box mb={{ base: 8, md: 20 }}></Box>
      </Stack>
    </>
  );
};

export default Experience;
