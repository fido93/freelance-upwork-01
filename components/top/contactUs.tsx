import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { FC } from 'react';
import ContactForm from '../contactForm';




const ContactUs = () => {
  const {isOpen, onClose, onOpen} = useDisclosure()

  const contacts:ContactCardProps[] = [
    {name:"Izaaz Hazmii", image: "https://uploads-ssl.webflow.com/617fe64455040465c06d52d2/618295eb71ff83ddba6548cb_edited_8621-p-1080.jpeg", tel:"+6011-2377-6490", email:"mizaazhazmii@gmail.com", description: "創業者/不動産ネゴシエーター(REN 44013)", onOpen},
    {name:"Engku Ihsan", image: "https://uploads-ssl.webflow.com/617fe64455040465c06d52d2/61974e025cf1e452745e97e3_PHOTO-2021-04-01-19-55-15_edited.jpg", tel:"+8180-2947-4788", email:"eihsan94@gmail.com", description: "共同創設者/日本支部マネージャー", onOpen},
  ]
  return (
    <Box py={{base:"50px", md:"100px"}} textAlign={"center"} >
      <Text as={"h1"} pb={{base:"0px", md:"70px"}} fontSize={{base:"4xl", md:"7xl"}}>問い合わせ</Text>
      <Flex justifyContent={"center"} alignItems={"center"} direction={{base:"column", md:"row"}}>
        {contacts.map((c,i) => <ContactCard key={i} {...c} />)}
      </Flex>
      <ContactForm isOpen={isOpen} onClose={onClose}/>
    </Box>
  )
}

export default ContactUs



interface ContactCardProps {
  name: string
  image: string
  tel: string
  email: string
  description: string
  onOpen: any
}
const ContactCard:FC<ContactCardProps> = ({name, image, tel, email, description, onOpen}) => {
  return (
    <Center 
      py={6} 
      _notFirst={{
        ml:{base:"0px", md:"5em"}
      }}

    >
      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src={
            'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
          }
          alt={
            'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={image}
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {name}
            </Heading>
            <Text textAlign={"center"} color={'gray.500'}>{description}</Text>
          </Stack>

          <Stack direction={'column'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>tel</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                {tel}
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>email</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                {email}
              </Text>
            </Stack>
          </Stack>

          <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
            onClick={onOpen}
            >
            連絡する
          </Button>
        </Box>
      </Box>
    </Center>
  );
}