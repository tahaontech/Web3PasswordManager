import {
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Button
  } from '@chakra-ui/react';

  import { useState } from 'react';

export default function AddPass({onclose, addFunc, enc}) {
    const [title, setTitle] = useState('');
    const [pass, setPass] = useState('');

    const adder = async () => {
        await addFunc(title, enc(pass));
    }
    return (<>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Add New Password</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <FormControl>
                    <FormLabel>Title</FormLabel>
                    <Input onChange={(e) => setTitle(e.target.value)} value={title} placeholder='Title' />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Password</FormLabel>
                    <Input onChange={(e) => setPass(e.target.value)} value={pass} placeholder='Data' />
                </FormControl>
            </ModalBody>

            <ModalFooter>
                <Button onClick={() => {
                    adder();
                    onclose();
                }} colorScheme='blue' mr={3}>
                    Add
                </Button>
                <Button onClick={onclose}>Cancel</Button>
            </ModalFooter>
        </ModalContent>
    </>)
}