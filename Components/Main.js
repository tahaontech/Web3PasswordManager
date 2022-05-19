import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Flex,
    Box,
    Heading,
    Spacer,
    ButtonGroup,
    Button,
    InputGroup,
    Input,
    InputRightElement,
    Tooltip,
    useColorModeValue,
    Stack,
    useColorMode,
    Modal,
    useToast
} from '@chakra-ui/react';
import { RepeatIcon, LockIcon, AddIcon, CopyIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useDisclosure } from '@chakra-ui/react';

import CryptoJS from "crypto-js";

import AddPass from "./Modals/AddPass";
import ChangeGPass from "./Modals/ChangeGPass";

export default function Main({ setGlobalPass, globalPass, addFunc, getFunc }) {

    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = useState(<AddPass enc={encrypter} addFunc={addFunc} onclose={onClose} />)
    const [clenData, setCleanData] = useState({});
    const toast = useToast()

    const encrypter = (pass) => {
        return CryptoJS.AES.encrypt(pass, globalPass).toString();
    }

    const decrypter = (encdata) => {
        return CryptoJS.AES.decrypt(encdata, globalPass).toString(CryptoJS.enc.Utf8);
    }

    const converter = (_rawData) => {
        let output = [];
        for (let i = 0; i < _rawData.length; i++) {
            output.push({ title: _rawData[i].title, data: decrypter(_rawData[i].data) });
        };
        setCleanData(output);
    }

    const fetchDatas = async () => {
        const rawData = await getFunc();
        converter(rawData);
        console.log(clenData);
    }


    return (<Flex
        minH="70vh"
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
        direction={"column"}
        overflow="hidden"
   >
        <Button onClick={toggleColorMode} mt="5">
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
        <Stack MaxWidth='3xl' alignItems='center' gap='2' p="5">
            <Box p='2'>
                <Heading size='md'>Main App</Heading>
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
                <Tooltip label='Change global password' fontSize='md'>
                    <Button
                        onClick={() => {
                            setOverlay(<ChangeGPass onclose={onClose} setGlobalPass={setGlobalPass} globalPass={globalPass} />)
                            onOpen()
                        }}
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}>
                        <LockIcon />
                    </Button>
                </Tooltip>
                <Tooltip label='Fetch data from blockchain' fontSize='md'>
                    <Button
                        onClick={fetchDatas}
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}>
                        <RepeatIcon />
                    </Button>
                </Tooltip>
                <Tooltip label="add new password" p="2">
                    <Button
                        onClick={() => {
                            setOverlay(<AddPass enc={encrypter} addFunc={addFunc} onclose={onClose} />)
                            onOpen()
                        }}
                        ml="5"
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}>
                        <AddIcon />
                    </Button>
                </Tooltip>
            </ButtonGroup>
        </Stack>

        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} mt='2' alignItems='center' >
            <Box
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}
                p={8}>
                <TableContainer MaxWidth="2xl">
                    <Table variant='simple'>
                        <TableCaption>your table</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Title</Th>
                                <Th>Password</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {(clenData.length > 0) ?
                                clenData.map((val, index) => (
                                    <Tr key={index}>
                                        <Td>{val.title}</Td>
                                        <Td>
                                            <InputGroup size='md'>
                                                <Input
                                                    isReadOnly={true}
                                                    value={val.data}
                                                    pr='4.5rem'
                                                    type='password'
                                                    onClick={(e) => { (e.target.type == "text") ? e.target.type = "password" : e.target.type = "text" }}
                                                />
                                                <InputRightElement width='4.5rem'>
                                                    <Tooltip label="copy to clipboard">
                                                        <Button onClick={() => {
                                                            navigator.clipboard.writeText(val.data);
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
                                        </Td>

                                    </Tr>
                                )) : "please fetch data or add new data"}

                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Stack>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
            {overlay}
        </Modal>
    </Flex>)
}