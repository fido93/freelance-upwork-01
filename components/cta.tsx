import { Flex, Text } from '@chakra-ui/react'
import RoundTriangleYellowBg from './images/roundTriangleYellowBg'

function Cta() {
    return (
        <>
            <Flex as="a" href={'/listings'} cursor={"pointer"} color="white" w="fit-content" transition={"all .7s ease"} border="solid 2px white" px="50px" py="10px" alignItems={"center"} justifyContent={"center"}
                _hover={{
                    bg: "yellow",
                    '&>svg': {
                        transform: "rotate(360deg)"
                    },
                    color: "black"
                }}
            >
                <Text fontWeight={"bold"}>
                    See listings
                </Text>
                <RoundTriangleYellowBg transition={"transform .5s ease"} h="30px" w="40px" />
            </Flex>
        </>
    )
}

export default Cta
