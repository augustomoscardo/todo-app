import { useMemo } from "react";

import { Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";

import { useTasks } from "../../hooks/useTasks";

export function TaskStatus() {
  const { tasks, getTasks, deleteAllCompletedTask, filter } = useTasks();

  const hoverValue = useColorModeValue("gray.800", "gray.100");

  const itemsLeft = useMemo(() => {
    if (filter === "all") {
      return `${tasks.filter((task) => !task.isCompleted).length} items left`;
    }

    if (filter === "active") {
      return `${tasks.length} items left`;
    }

    if (filter === "completed") {
      return "no items left";
    }
  }, [tasks]);

  return (
    <Flex
      color="gray.300"
      align="center"
      justify="space-between"
      width="100%"
      py={2}
      px={4}
    >
      <Text>{itemsLeft}</Text>
      <Flex gap={2} fontWeight="700">
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
          _focus={{ border: "none", color: "blue.500" }}
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
          _focus={{ border: "none", color: "blue.500" }}
          onClick={() => getTasks("completed")}
        >
          Completed
        </Button>
      </Flex>
      <Button
        bg="transparent"
        textDecoration="none"
        fontWeight="400"
        color="gray.300"
        padding={0}
        _hover={{ color: hoverValue }}
        _focus={{ border: 0 }}
        onClick={() => deleteAllCompletedTask()}
      >
        Clear Completed
      </Button>
    </Flex>
  );
}
