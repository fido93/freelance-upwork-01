import {
  Box,
  BoxProps,
  Container,
  Flex,
  FlexProps,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { Parallax } from "react-scroll-parallax";
import { Layout } from "../base/layout";
import Navbar from "../base/navbar";
import Cta from "../cta";
import Img from "../images/img";

function Hero(props: BoxProps) {
  const heroBg =
    "linear-gradient(153deg, rgba(255,255,255,1) 0%, rgba(68,68,68,1) 0%, rgba(0,0,0,1) 29%, rgba(0,0,0,1) 100%);";
  return (
    <Box bg={heroBg} h="100vh">
      <Layout h="100%">
        <Navbar pt={"3em"} pb={{ base: "3em", md: "6em" }} />
        <Flex flexWrap={"wrap"}>
          <HeroHeading flex={1} />
          <HeroImage flex={1} minW={300} />
        </Flex>
      </Layout>
    </Box>
  );
}
export default Hero;

const HeroHeading = (props: BoxProps) => {
  const portfolios: PortfolioProps[] = [
    { val: "9K", title: "Happy Customer" },
    { val: "2K", title: "Rental" },
    { val: "28", title: "Condominium" },
  ];
  return (
    <Box {...props}>
      <Text variant="heroTitle">Discover Most Suitable Property</Text>
      <Text variant="heroSubtitle" py="2em">
        Find a variety of properties that suit you very easily <br />
        forget all difficulties in finding a residence for you.
      </Text>
      <CTA />
      <Flex justifyContent={"space-between"} py="2em" w="70%">
        {portfolios.map((p, i) => (
          <Portfolio key={i} {...p} />
        ))}
      </Flex>
    </Box>
  );
};
const CTA = () => (
  <Box>
    <Parallax x={[-25, 60]} tagOuter="figure">
      <Cta />
    </Parallax>
  </Box>
);

interface PortfolioProps extends BoxProps {
  val: string;
  title: string;
}
const Portfolio: FC<PortfolioProps> = (props) => {
  const { val, title } = props;
  return (
    <Box {...props} color="white">
      <Flex alignItems={"center"} pb={".5em"} fontSize={"2em"}>
        <Text>{val}</Text>
        <Text color="orange.500">+</Text>
      </Flex>
      <Text variant="heroSubtitle">{title}</Text>
    </Box>
  );
};

const HeroImage = (props: BoxProps) => {
  const val = useBreakpointValue({ md: 600, base: 200 });
  const w = useBreakpointValue({ base: val, md: val });
  return (
    <Box
      {...props}
      w={`${w}px`}
      h={`${(w as number) * 1.3}px`}
      zIndex={2}
      mt="1em"
      borderTopRadius={"full"}
      pos="relative"
    >
      <ColorfulBoxShadow>
        <Img
          borderTopRadius={"full"}
          objectFit={"cover"}
          h="100%"
          w="100%"
          src="images/hero.webp"
        />
      </ColorfulBoxShadow>
    </Box>
  );
};

const ColorfulBoxShadow: FC<FlexProps> = (props) => {
  const { children } = props;
  return (
    <Flex
      h="100%"
      _before={{
        content: '""',
        position: "absolute",
        zIndex: "-1",
        height: "full",
        maxW: "640px",
        width: "full",
        filter: "blur(40px)",
        transform: "scale(0.98)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        top: 0,
        left: 0,
        // backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
        backgroundImage: `url(images/hero.webp)`,
      }}
    >
      {children}
    </Flex>
  );
};
