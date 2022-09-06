import { ChangeEvent } from "react";

import {
  Button,
  Checkbox,
  Flex,
  Image as ChakraImage,
  useColorModeValue,
} from "@chakra-ui/react";

import { useTasks } from "../../hooks/useTasks";

interface TaskItemProps {
  task: {
    _id?: string;
    description?: string;
    isCompleted: boolean;
  };
}

export function TaskItem({ task }: TaskItemProps) {
  const checkboxTextValue = useColorModeValue("gray.600", "gray.100");
  const borderBottomColorValue = useColorModeValue("gray.200", "gray.500");

  const { updateTask, deleteTask } = useTasks();

  const handleToggle = async (e: ChangeEvent<HTMLInputElement>) => {
    const newTask = {
      _id: task._id,
      isCompleted: e.target.checked,
    };
    console.log(newTask);

    await updateTask(newTask);
  };

  const handleDeleteTask = async () => {
    await deleteTask(task._id as string);
  };

  return (
    <Flex
      borderBottom="1px"
      borderColor={borderBottomColorValue}
      width="100%"
      align="center"
      justify="space-between"
    >
      <Checkbox
        borderRadius="full"
        spacing={4}
        py={4}
        ml={4}
        size="lg"
        colorScheme="transparent"
        color={checkboxTextValue}
        isChecked={task.isCompleted}
        onChange={handleToggle}
        _checked={{
          textDecoration: "line-through",
          textDecorationColor: "gray.300",
          textColor: "gray.300",
        }}
      >
        {task.description}
      </Checkbox>
      <Button
        bg="transparent"
        _hover={{ background: "transparent" }}
        p={0}
        mr={5}
        onClick={handleDeleteTask}
      >
        <ChakraImage
          src="/images/icon-cross.svg"
          alt="Delete task"
          width={4}
          height={4}
        />
      </Button>
    </Flex>
  );
}
