import React from "react";
import { Box, Text, SimpleGrid, Button, Stack, Flex } from "@chakra-ui/react";

const Experience = () => {
  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      maxWidth="1360px"
      minWidth="356px"
      width="100%"
      as="section"
      px={[2, 6, 6]}
      py={2}
      mx="auto"
    >
      <Flex>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          dignissimos provident cumque mollitia aperiam laborum, aliquam ratione
          optio doloribus voluptates, corporis iste ducimus a dolorem
          perspiciatis quam laudantium libero architecto!
        </Text>
      </Flex>
      <Flex>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          dignissimos provident cumque mollitia aperiam laborum, aliquam ratione
          optio doloribus voluptates, corporis iste ducimus a dolorem
          perspiciatis quam laudantium libero architecto!
        </Text>
      </Flex>
    </Stack>
  );
};

export default Experience;
