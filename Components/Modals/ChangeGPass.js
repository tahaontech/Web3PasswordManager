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

  import { useState } from "react";

export default function ChangeGPass({onclose, globalPass, setGlobalPass}) {
    const [newGPass, setNewGPass] = useState(globalPass);

    return (<>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Change your global password</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <FormControl mt={4}>
                    <FormLabel>Password</FormLabel>
                    <Input value={newGPass} onChange={(e) => setNewGPass(e.target.value)} placeholder='Password' />
                </FormControl>
            </ModalBody>

            <ModalFooter>
                <Button onClick={() => {
                    setGlobalPass(newGPass);
                    onclose();
                    }} colorScheme='blue' mr={3}>
                    Save
                </Button>
                <Button onClick={onclose}>Cancel</Button>
            </ModalFooter>
        </ModalContent>
    </>)
}