import { Button, Image as ChakraImage, useColorMode } from "@chakra-ui/react";

export function ThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      background="transparent"
      border="none"
      padding="0"
      variant="ghost"
      _hover={{ background: "transparent" }}
      _focus={{ border: 0 }}
      onClick={toggleColorMode}
    >
      {colorMode === "dark" ? (
        <ChakraImage
          src="/images/icon-sun.svg"
          alt="Light mode"
          boxSize={["20px", "30px"]}
        />
      ) : (
        <ChakraImage
          src="/images/icon-moon.svg"
          alt="Dark mode"
          boxSize="20px"
        />
      )}
    </Button>
  );
}
