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
} from "@chakra-ui/react";

const Experience = () => {
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
          maxWidth="1360px"
          minWidth="356px"
          width="100%"
          px={[2, 6, 6]}
          py={2}
          pt={10}
          pb={10}
          mx="auto"
          as="div"
        >
          <Flex as="div" flexDirection="column" position="relative" mb={7}>
            <SimpleGrid columns={2} spacing={10}>
              <Box p={8}></Box>
              <Box p={8} position="relative" alignItems="center" display="flex">
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
            </SimpleGrid>
          </Flex>
          <Flex as="div">
            <Text
              fontFamily="Cormorant"
              color="white"
              fontSize={["sm", "md", "6xl", "6xl"]}
              mb={6}
              textTransform="capitalize"
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
              Each individual unit is equipped with partial premium furnishing,
              which makes it easier for the residents to complete the unit with
              only loose furniture and interior deco. Premium furnishing listing
              includes full top & bottom kitchen cabinet, cooker hob & hood,
              2-in 1 microwave oven, refrigerator, 2-in 1 washer dryer,
              air-conditioning for all rooms, wardrobe for all bedrooms, hot
              water storage for all bathrooms and Smart Home Community Apps
              ready. This development is secured with 24 hours 6 tiers security
              surveillance, where each home also comes with an exclusive Digital
              Door Lock at the main entrance with 3-in-1 features.
            </Text>
          </Flex>
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
        <Box maxWidth="1360px" width="100%" mx="auto">
          <Flex as="div" display="flex" width="100%" flexWrap="wrap">
            {gallerySection.map((a) => (
              <Box width="50%" p={10} key={a.toString()}>
                <Image key={a.toString()} src={a.uri} alt="gallery" />
              </Box>
            ))}
          </Flex>
        </Box>
      </Stack>
      <Stack as="section">
        <iframe
          style={{ position: "relative", height: "1000px" }}
          src="https://www.youtube.com/embed/Q79dvrQ7qFg"
          allowFullScreen
        />
      </Stack>
      <Stack as="section" backgroundColor="primary">
        <SimpleGrid columns={2} spacing={10}>
          <Box p={0} position="relative" alignItems="center" display="flex">
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
          <Box p={8}></Box>
        </SimpleGrid>
        <Box mb={{ base: 8, md: 20 }}>
          <Heading
            fontFamily="Cormorant"
            color="white"
            fontSize={["sm", "md", "5xl", "5xl"]}
            mb={6}
            lineHeight="77.5px"
          >
            We’d love to hear from you
          </Heading>
          <Text
            lineHeight="32px"
            color="white"
            fontSize="18px"
            fontFamily="Montserrat"
            fontWeight="700"
          >
            We are here to help and guide you so that you can book with peace in
            mind
          </Text>
        </Box>
      </Stack>
    </>
  );
};

export default Experience;
