import LandingLayout from "../Components/layouts/LandingLayout";
import { Modal, useDisclosure } from "@chakra-ui/react";
import {
    Flex,
    Button,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Image,
    InputGroup,
    InputRightElement,
    Tooltip,
    useToast
} from '@chakra-ui/react';
import { CopyIcon } from "@chakra-ui/icons";


export default function DonatePage() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast()
    return (<>
        <LandingLayout >
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
            >
                <Button
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                        bg: 'blue.500',
                    }}
                    height="200px"
                    onClick={onOpen}>
                    <Image src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-2.svg" alt="donate button" />
                </Button>
            </Flex>
        </LandingLayout>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Buy me a coffee(web3 way &#128579;)</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>Polygon(Matic) wallet</FormLabel>
                        <InputGroup size='md'>
                            <Input
                                isReadOnly={true}
                                value="my wallet address"
                                pr='4.5rem'
                                type='text'
                            />
                            <InputRightElement width='4.5rem'>
                                <Tooltip label="copy to clipboard">
                                    <Button onClick={() => {
                                        navigator.clipboard.writeText("my wallet address");
                                        toast({ title: "text copied successfully", position: "top", status: 'success', isClosable: true });
                                    }}
                                        h='1.75rem'
                                        size='sm'
                                        colorScheme="teal">
                                        <CopyIcon />
                                    </Button>
                                </Tooltip>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Eth wallet</FormLabel>
                        <InputGroup size='md'>
                            <Input
                                isReadOnly={true}
                                value="my wallet address"
                                pr='4.5rem'
                                type='text'
                            />
                            <InputRightElement width='4.5rem'>
                                <Tooltip label="copy to clipboard">
                                    <Button onClick={() => {
                                        navigator.clipboard.writeText("my wallet address");
                                        toast({ title: "text copied successfully", position: "top", status: 'success', isClosable: true });
                                    }}
                                        h='1.75rem'
                                        size='sm'
                                        colorScheme="teal">
                                        <CopyIcon />
                                    </Button>
                                </Tooltip>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>

    </>);
}
