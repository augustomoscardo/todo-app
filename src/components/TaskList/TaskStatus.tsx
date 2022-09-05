import { Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";

import { useTasks } from "../../hooks/useTasks";

export function TaskStatus() {
  const [isActive, setIsActive] = useState(false);

  const {
    tasks,
    getTasks,
    getActiveTasks,
    getCompletedTasks,
    deleteAllCompletedTask,
  } = useTasks();

  const hoverValue = useColorModeValue("gray.800", "gray.100");

  function toggleActive() {
    setIsActive(!isActive);
    console.log(isActive);
  }

  return (
    <Flex
      color="gray.300"
      align="center"
      justify="space-between"
      width="100%"
      py={2}
      px={4}
    >
      <Text>{tasks.length} items left</Text>
      <Flex gap={2} fontWeight="700">
        <Button
          bg="transparent"
          textDecoration="none"
          padding={0}
          _hover={{ color: hoverValue }}
          _active={{
            background: "transparent",
            border: "none",
          }}
          _focus={{ border: "none", color: "blue.500" }}
          onClick={() => getTasks()}
        >
          All
        </Button>
        <Button
          bg="transparent"
          textDecoration="none"
          padding={0}
          _hover={{ color: hoverValue }}
          isActive={isActive}
          _active={{
            background: "transparent",
            border: "none",
          }}
          _focus={{ border: "none", color: "blue.500" }}
          onClick={() => getActiveTasks()}
        >
          Active
        </Button>
        <Button
          bg="transparent"
          textDecoration="none"
          padding={0}
          _hover={{ color: hoverValue }}
          _active={{
            background: "transparent",
            border: "none",
          }}
          _focus={{ border: "none", color: "blue.500" }}
          onClick={() => getCompletedTasks()}
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
