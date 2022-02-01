import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLine,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import Logo from "../images/logo";
import { Link } from 'react-scroll'

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  const nav = [
    {
      label: 'アフィリエイトについて',
      href: 'featureOffering'
    },
    {
      label: 'アフィリエイト報酬',
      href: 'rewards'
    },
    {
      label: 'アフィリエイト流れ',
      href: 'applicationProcess',
    },
    {
      label: 'エイジェントの声',
      href: 'testimonials',
    },
    {
      label: '問い合わせ',
      href: 'contactUs',
    },
  ]
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo h="36px" color="black" />
            </Box>
            <Text fontSize={"sm"}>
              © 2021 malayauchi All rights reserved
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Facebook"} href={"https://www.facebook.com/malayauchi2021"}>
                <FaFacebook />
              </SocialButton>
              <SocialButton label={"Twitter"} href={"https://twitter.com/malayauchi"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"https://www.instagram.com/malayauchi/?hl=ja"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            {nav.map((n, i) => 
              <Link key={i} 
                activeClass="active"
                to={n.href}
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-100}
                duration={500}
                isDynamic={true}
              >
                <Text fontWeight={"bold"}>
                  {n.label}
                </Text>
              </Link>
            )}
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
