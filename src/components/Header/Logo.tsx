import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      as="header"
      casing="uppercase"
      letterSpacing={12}
      color="gray.50"
      fontSize="4xl"
      fontWeight="700"
    >
      todo
    </Text>
  );
}
