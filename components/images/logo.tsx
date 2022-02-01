import { IconProps, Text, Flex, Image, Box, Divider } from "@chakra-ui/react";

const Logo = (props: IconProps) => {
  const image = './images/logo.webp'
  return (
    <Flex alignItems="center" pos="relative">
      <Image h={{ base: "26px", md: "46px" }} src={image} alt={image} fallbackSrc={image} />
      <Box
        zIndex="2"
        ml="10px"
        textTransform="uppercase"
        color={props.color || "black"}
        fontWeight="bold"
        textAlign={"center"}
        fontSize={".8em"}
      >
        <Text>
          Malayauchi
        </Text>
        <Divider />
        <Text>
          マラヤ家
        </Text>
      </Box>
    </Flex >
  );
};

export default Logo;
