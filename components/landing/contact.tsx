import React from "react";
import {
  Box,
  Text,
  SimpleGrid,
  Container,
  Stack,
  Flex,
  Heading,
  Button,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <>
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

export default Contact;
