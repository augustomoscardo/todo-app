import { Flex } from "@chakra-ui/react";

import { Logo } from "./Logo";
import { ThemeButton } from "./ThemeButton";

export function Header() {
  return (
    <Flex justify="space-between" width="100%">
      <Logo />
      <ThemeButton />
    </Flex>
  );
}
