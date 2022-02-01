import {
  Image,
  Flex,
  Text,
  Box,
} from "@chakra-ui/react";
import { Parallax } from "react-scroll-parallax";

export default function FeatureOffering() {
  const imgUrl = 'https://i.ibb.co/vm7jTdv/output-onlineimagetools.png'
  const companies1 = [
    'https://i.ibb.co/sFXtZjY/unnamed.png',
    'https://i.ibb.co/c6RLDsW/New-logo-regus-removebg-preview.png',
    'https://i.ibb.co/JjGxmgY/spaces.png',
  ]
  const companies2 = [
    "https://i.ibb.co/mXWfzLP/Sunway-Property-MCI-Logo.png",
    "https://i.ibb.co/vJcB9JH/Screen-Shot-2022-01-09-at-11-21-52-removebg-preview.png",
    "https://i.ibb.co/vZ8wJfS/Screen-Shot-2022-01-09-at-11-32-22-removebg-preview.png",
    "https://i.ibb.co/KFdgQVK/Screen-Shot-2022-01-09-at-11-33-29-removebg-preview.png",
  ]
  const merits = [
    { title: 'マレーシアでの不動産市場を理解できる', image: 'https://i.ibb.co/wRGX02y/photo-1577609060534-4254158ea447.jpg' },
    { title: '収入が高い、サイドビジネスにはピッタリ', image: 'https://i.ibb.co/7zLNp9s/photo-1518186233392-c232efbf2373.jpg' },
    { title: 'リモートでできる', image: 'https://i.ibb.co/LQcyt2K/photo-1543269866-487350d6fa5e.jpg' },
  ]
  return (
    <Box
      overflow={"hidden"}
      px={{ base: "30px", md: "0px" }}
      pos="relative"
    >
      <Box>
        <Parallax x={[50, -20]} tagOuter="figure">
          <Flex justifyContent={"space-evenly"} pb={{ base: "10px", md: "50px" }} >
            {companies1.map((c, i) => <Image h={{ base: "80px", md: "100px" }} ml={{ base: "3em", md: "0px" }} key={i} src={c} fallbackSrc={c} alt={c} />)}
          </Flex>
          <Flex justifyContent={"space-evenly"} >
            {companies2.map((c, i) => <Image h={{ base: "70px", md: "100px" }} ml={{ base: "3em", md: "0px" }} key={i} src={c} fallbackSrc={c} alt={c} />)}
          </Flex>
        </Parallax>
      </Box>
    </Box>
  );
}
