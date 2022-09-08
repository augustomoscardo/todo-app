import { ChangeEvent } from "react";
import { DraggableProvided } from "react-beautiful-dnd";

import {
  Button,
  Checkbox,
  Flex,
  Image as ChakraImage,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { useTasks } from "../../hooks/useTasks";

interface TaskItemProps {
  task: {
    _id?: string;
    description?: string;
    isCompleted: boolean;
  };
  provided: DraggableProvided;
}

export function TaskItem({ task, provided }: TaskItemProps) {
  const checkboxTextValue = useColorModeValue("gray.600", "gray.200");
  const checkboxCheckedTextValue = useColorModeValue("gray.200", "gray.400");
  const borderBottomColorValue = useColorModeValue("gray.200", "gray.500");

  const { updateTask, deleteTask } = useTasks();

  const handleToggle = async (e: ChangeEvent<HTMLInputElement>) => {
    const newTask = {
      _id: task._id,
      isCompleted: e.target.checked,
    };

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
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <Checkbox
        w="100%"
        py={5}
        borderRadius="full"
        spacing={4}
        ml={5}
        size="lg"
        color={checkboxTextValue}
        colorScheme="transparent"
        isChecked={task.isCompleted}
        onChange={handleToggle}
        _checked={{
          textDecoration: "line-through",
          textDecorationColor: checkboxCheckedTextValue,
          textColor: checkboxCheckedTextValue,
        }}
      >
        <Text fontSize={["sm", "lg"]}>{task.description}</Text>
      </Checkbox>
      <Button
        bg="transparent"
        _hover={{ background: "transparent" }}
        p={0}
        mr={[1.5, 2]}
        onClick={handleDeleteTask}
      >
        <ChakraImage
          src="/images/icon-cross.svg"
          alt="Delete task"
          w="100%"
          boxSize={[3, 4]}
          height={[3, 4]}
        />
      </Button>
    </Flex>
  );
}
