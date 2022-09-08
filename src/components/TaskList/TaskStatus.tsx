import { Button, Flex, useColorModeValue } from "@chakra-ui/react";

import { useTasks } from "../../hooks/useTasks";

export function TaskStatus() {
  const { getTasks, filter } = useTasks();

  const hoverValue = useColorModeValue("gray.800", "gray.100");

  return (
    <Flex gap={3} fontWeight="700">
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
        All
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
        Active
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
        Completed
      </Button>
    </Flex>
  );
}
