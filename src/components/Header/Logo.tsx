import { Flex, Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Flex align="center">
      <Text
        as="header"
        casing="uppercase"
        letterSpacing={12}
        color="gray.50"
        fontSize={["2xl", "4xl"]}
        fontWeight="700"
        alignContent="center"
      >
        todo
      </Text>
    </Flex>
  );
}
