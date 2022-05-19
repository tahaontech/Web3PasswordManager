import { Box, Text } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        web3pass
      </Text>
    </Box>
  );
}