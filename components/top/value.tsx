import { ReactNode } from 'react';
import {
    Stack,
    Container,
    Box,
    Flex,
    Text,
    Heading,
    SimpleGrid,
} from '@chakra-ui/react';

export default function Values() {
    return (
        <Box bg={'gray.800'} position={'relative'}>
            <Flex
                flex={1}
                zIndex={0}
                display={{ base: 'none', lg: 'flex' }}
                backgroundImage="url('images/value.webp')"
                backgroundSize={'cover'}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                position={'absolute'}
                width={'50%'}
                insetY={0}
                right={0}>
                <Flex
                    bgGradient={'linear(to-r, gray.800 10%, transparent)'}
                    w={'full'}
                    h={'full'}
                />
            </Flex>
            <Container maxW={'7xl'} zIndex={10} position={'relative'}>
                <Stack direction={{ base: 'column', lg: 'row' }}>
                    <Stack
                        flex={1}
                        color={'gray.400'}
                        justify={{ lg: 'center' }}
                        py={{ base: 4, md: 20, xl: 60 }}>
                        <Box mb={{ base: 8, md: 20 }}>
                            <Text
                                fontFamily={'heading'}
                                fontWeight={700}
                                textTransform={'uppercase'}
                                mb={3}
                                fontSize={'xl'}
                                color={'gray.500'}>
                                Our Value
                            </Text>
                            <Heading
                                color={'white'}
                                mb={5}
                                fontSize={{ base: '3xl', md: '5xl' }}>
                                Catered fully for Japanese people
                            </Heading>
                            <Text fontSize={'xl'} color={'gray.400'}>
                                In Malayauchi we truly believe that our customer satisfaction is number one. We will do our best in making that happen
                            </Text>
                        </Box>

                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                            {stats.map((stat) => (
                                <Box key={stat.title}>
                                    <Text
                                        fontFamily={'heading'}
                                        fontSize={'3xl'}
                                        color={'white'}
                                        fontWeight={"bold"}
                                        mb={3}>
                                        {stat.title}
                                    </Text>
                                    <Text fontSize={'xl'} color={'gray.400'}>
                                        {stat.content}
                                    </Text>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Stack>
                    <Flex flex={1} />
                </Stack>
            </Container>
        </Box>
    );
}

const StatsText = ({ children }: { children: ReactNode }) => (
    <Text as={'span'} fontWeight={700} color={'white'}>
        {children}
    </Text>
);

const stats = [
    {
        title: 'Local Knowledge',
        content: (
            <>
                As <StatsText>Certified Real Estate Negotiator</StatsText> , we have the experience and insight to answer you inquiries about any neighborhood in Malaysia.
            </>
        ),
    },
    {
        title: 'Long Term aftercare',
        content: (
            <>
                We provide you with long term <StatsText>aftercare</StatsText>. We will make sure that you satisfy even after the purchase is completed.
            </>
        ),
    },
    {
        title: 'Proven Experience',
        content: (
            <>
                We worked on a variety of <StatsText>Transactions</StatsText> from condominiums to landed houses and we know what it takes to handle your house.
            </>
        ),
    },
    {
        title: 'True Partnership',
        content: (
            <>
                <StatsText>Success of our clients</StatsText> is the number one priority. And we are here to support you every step of the way in achieving your objectives.
            </>
        ),
    },
];