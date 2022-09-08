import { Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";

import { useTasks } from "../../hooks/useTasks";

export function TaskStatusMobile() {
  const { getTasks, filter } = useTasks();

  const hoverValue = useColorModeValue("gray.800", "gray.100");

  return (
    <>
      <Flex
        align="center"
        justifyContent="center"
        width="100%"
        gap={4}
        fontWeight="700"
      >
        <Button
          bg="transparent"
          textDecoration="none"
          padding={0}
          _hover={{ color: hoverValue }}
          isActive={filter === "all"}
          _active={{
            background: "transparent",
            border: "none",
            color: "blue.500",
          }}
          _focus={{ border: "none" }}
          onClick={() => getTasks("all")}
        >
          <Text fontSize="sm">All</Text>
        </Button>
        <Button
          bg="transparent"
          textDecoration="none"
          padding={0}
          _hover={{ color: hoverValue }}
          isActive={filter === "active"}
          _active={{
            background: "transparent",
            border: "none",
            color: "blue.500",
          }}
          _focus={{ border: "none" }}
          onClick={() => getTasks("active")}
        >
          <Text fontSize="sm">Active</Text>
        </Button>
        <Button
          bg="transparent"
          textDecoration="none"
          padding={0}
          _hover={{ color: hoverValue }}
          isActive={filter === "completed"}
          _active={{
            background: "transparent",
            border: "none",
            color: "blue.500",
          }}
          _focus={{ border: "none" }}
          onClick={() => getTasks("completed")}
        >
          <Text fontSize="sm">Completed</Text>
        </Button>
      </Flex>
    </>
  );
}
