import { Button, Flex, FormControl, FormLabel, Image, Input, InputGroup, InputLeftElement, Modal, ModalCloseButton, ModalContent, ModalOverlay, Text, Textarea, useToast, VStack } from '@chakra-ui/react'
import { FC, useState } from 'react'
import {
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsPerson } from 'react-icons/bs';

interface OnBoardingFormProps {
    isOpen: boolean
    onClose: any
}

const OnBoardingForm:FC<OnBoardingFormProps> = ({isOpen, onClose}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="6xl">
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton c />
                    <ModalForm onClose={onClose} />
            </ModalContent>
        </Modal>
    )

}

export default OnBoardingForm

interface ModalFormProps {
    onClose: any
}
const ModalForm:FC<ModalFormProps> = ({onClose}) => {
    
    const img = 'https://i.ibb.co/wNpvv4C/john-schnobrich-2-FPjl-Ay-MQTA-unsplash.jpg'
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const toast = useToast()

    const submitHandler = async() => {
        setLoading(true)
        const body = JSON.stringify({
            name,
            email,
            message,
        })
        const res = await fetch('/api/onBoardingForm', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body,
        })
        if (res.status === 200) {
          console.log('Response succeeded!')
            setLoading(false)
            setName('')
            setEmail('')
            setMessage('')
            onClose()
            toast({
                title: '申請完了しました!',
                description: "二日以内に弊社から連絡いたします。",
                status: 'success',
                duration: 9000,
                isClosable: true
            })
        } else {
            setLoading(false)
            toast({
                title: 'エラー',
                description: `${res.status} - ${res.statusText}`,
                status: 'error',
                duration: 9000,
                isClosable: true,
            })   
        }
    }

    return (
        <Flex direction={{base:"column", md:"row"}} fontFamily={"sans-serif"}>
            <Image
                display={{base:"none", md:"inherit"}}
                flex={1}
                objectFit={"cover"}
                objectPosition={"center"}
                src={img}
                alt={img}
                fallbackSrc={img}
            />
            <VStack px={8} py={8} flex={1} alignItems={"flex-start"}>
                <Text fontWeight={"bold"} fontSize={30}>エイジェントになる</Text>
                <FormControl id="name" isRequired={true}>
                    <FormLabel>名前</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                            pointerEvents="none"
                        >
                            <BsPerson color="gray.800" />
                        </InputLeftElement>
                        <Input type="text" size="md" onChange={(evt) => setName(evt.target.value)} />
                    </InputGroup>
                </FormControl>
                <FormControl id="name" isRequired={true}>
                    <FormLabel>メールアドレス</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                        pointerEvents="none"
                        >
                            <MdOutlineEmail color="gray.800" />
                        </InputLeftElement>
                        <Input type="email" size="md" onChange={(evt) => setEmail(evt.target.value)} />
                    </InputGroup>
                </FormControl>
                <FormControl id="name">
                    <FormLabel>その他</FormLabel>
                    <Textarea
                        borderColor="gray.300"
                        _hover={{
                        borderRadius: 'gray.300',
                        }}
                        placeholder="その他聞きたいことあれば入れてください"
                        onChange={(evt) => setMessage(evt.target.value)} />
                </FormControl>
                <FormControl id="name" float="right">
                <Button
                    variant="solid"
                    bg="#0D74FF"
                    color="white"
                    _hover={{}}
                    onClick={submitHandler}
                    disabled={!email || !name}
                    isLoading={loading}
                >
                    送信
                </Button>
                </FormControl>
            </VStack>
        </Flex>
    )
}