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

const Concept = () => {
  const goldust = "./images/landing/concept/gold dust.webp";
  return (
    <>
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
    </>
  );
};

export default Concept;
