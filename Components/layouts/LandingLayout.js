import { Flex } from "@chakra-ui/react";
import Header from "../sections/Header";

export default function LandingLayout(props, { onOpen }) {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
    >
      <Header onOpen={onOpen} />
      {props.children}
    </Flex>
  );
}