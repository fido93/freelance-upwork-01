import React from "react";
import {
    Box,
    Text,
    SimpleGrid,
    Container,
    Stack,
    Flex,
    Image,
} from "@chakra-ui/react";

const Gallery = () => {
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
    </>
  );
};

export default Gallery;
