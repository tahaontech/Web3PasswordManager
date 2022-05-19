import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useColorMode
} from '@chakra-ui/react';


export default function Login({ setGlobalPass, connect }) {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Button onClick={toggleColorMode} mt="5">
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button>
          <Heading fontSize={'4xl'}>Sign in to your Wallet</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input onChange={(e) => setGlobalPass(e.target.value)} type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Text fontSize={'lg'} color={'gray.600'}>
                  this password used to encrypt your data.  (keep it safe)
                </Text>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={() => connect()}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}