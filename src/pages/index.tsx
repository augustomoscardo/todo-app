import {
  Box,
  Flex,
  Image,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import type { NextPage } from "next";

import { FormInput } from "../components/Form/FormInput";
import { Header } from "../components/Header";
import { TaskList } from "../components/TaskList";

const Home: NextPage = () => {
  const backgroundValue = useColorModeValue("gray.200", "gray.900");
  const desktopImageValue = useColorModeValue(
    "/images/bg-desktop-light.jpg",
    "/images/bg-desktop-dark.jpg"
  );
  const mobileImageValue = useColorModeValue(
    "/images/bg-mobile-light.jpg",
    "/images/bg-mobile-dark.jpg"
  );

  const imageValue = useBreakpointValue({
    base: mobileImageValue,
    sm: desktopImageValue,
  });

  return (
    <Flex
      background={backgroundValue}
      height="100%"
      minW="375px"
      maxW={["375px", "100%"]}
      width="100%"
      position="relative"
      justifyContent="center"
    >
      <Box w="100%">
        <Image
          objectFit="cover"
          src={imageValue}
          w="100%"
          h={{ base: "200px", sm: "300px" }}
        />
      </Box>
      <Flex
        direction="column"
        maxW={["330px", "500px"]}
        width="100%"
        position="absolute"
        mt={["2.5rem", "7rem"]}
        height="100vh"
        alignItems="center"
      >
        <Header />
        <FormInput />
        <TaskList />
        <Text color="gray.300" mt={8}>
          Drag and drop to reorder list
        </Text>
      </Flex>
    </Flex>
  );
};

export default Home;
