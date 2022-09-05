import { Flex, Stack, useColorModeValue, Text } from "@chakra-ui/react";

import { useTasks } from "../../hooks/useTasks";
import { TaskItem } from "./Taskitem";
import { TaskStatus } from "./TaskStatus";

export function TaskList() {
  const { tasks } = useTasks();

  const backGroundValue = useColorModeValue("gray.50", "gray.800");

  return (
    <Stack bg={backGroundValue} mt={6} rounded="md" width="100%" boxShadow="xl">
      {tasks.length ? (
        <>
          {tasks.map((task) => (
            <TaskItem key={task._id as string} task={task} />
          ))}
        </>
      ) : (
        <Flex align="center" justifyContent="center" mt={4} fontWeight="bold">
          <Text color="gray.300">Start setting your goals.</Text>
        </Flex>
      )}

      <TaskStatus />
    </Stack>
  );
}
