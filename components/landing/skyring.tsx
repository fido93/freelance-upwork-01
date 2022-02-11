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

const Skyring = () => {
  const skyring2 = "./images/landing/skyring/ring 2.webp";
  const skyring = "./images/landing/skyring/ring 1.webp";
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
    </>
  );
};

export default Skyring;
