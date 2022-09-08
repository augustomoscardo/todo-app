import { useEffect, useMemo, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";

import {
  Flex,
  Stack,
  useColorModeValue,
  Text,
  useBreakpointValue,
  Box,
  Button,
} from "@chakra-ui/react";

import { Task, useTasks } from "../../hooks/useTasks";
import { TaskItem } from "./Taskitem";
import { TaskStatus } from "./TaskStatus";
import { TaskStatusMobile } from "./TaskStatusMobile";

export function TaskList() {
  const { tasks, deleteAllCompletedTask, filter, reorderTasks } = useTasks();
  const [elements, setElements] = useState<Task[] | []>([]);

  console.log(elements);

  const backGroundValue = useColorModeValue("gray.50", "gray.800");
  const hoverValue = useColorModeValue("gray.800", "gray.100");

  const isMobileScreen = useBreakpointValue({
    base: false,
    sm: true,
  });

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

  function handleOnDragEnd(result: DropResult) {
    console.log(result);

    if (!result.destination) return;

    if (
      result.destination.droppableId === result.source.droppableId &&
      result.destination.index === result.source.index
    )
      return;

    const items = Array.from(elements);

    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    console.log(items);

    reorderTasks(items);
  }

  useEffect(() => {
    setElements(tasks);
  }, [tasks]);

  return (
    <>
      {isMobileScreen ? (
        <Stack
          bg={backGroundValue}
          mt={6}
          rounded="md"
          width="100%"
          boxShadow="2xl"
        >
          {tasks.length ? (
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="elements">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {tasks.map((task, index) => (
                      <Draggable
                        key={task._id as string}
                        draggableId={task._id as string}
                        index={index}
                      >
                        {(provided) => (
                          <TaskItem task={task} provided={provided} />
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          ) : (
            <Flex
              align="center"
              justifyContent="center"
              mt={4}
              fontWeight="bold"
            >
              <Text color="gray.300">Start setting your goals.</Text>
            </Flex>
          )}

          <Flex
            color="gray.300"
            align="center"
            justify="space-between"
            width="100%"
            py={2}
            px={5}
          >
            <Text>{itemsLeft}</Text>
            <TaskStatus />

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
              <Text>Clear Completed</Text>
            </Button>
          </Flex>
        </Stack>
      ) : (
        <>
          <Stack
            bg={backGroundValue}
            mt={4}
            rounded="md"
            width="100%"
            boxShadow="2xl"
          >
            {tasks.length ? (
              <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="elements">
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      {tasks.map((task, index) => (
                        <Draggable
                          key={task._id as string}
                          draggableId={task._id as string}
                          index={index}
                        >
                          {(provided) => (
                            <TaskItem task={task} provided={provided} />
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            ) : (
              <Flex
                align="center"
                justifyContent="center"
                mt={4}
                fontWeight="bold"
              >
                <Text color="gray.300" fontSize="sm">
                  Start setting your goals.
                </Text>
              </Flex>
            )}

            <Flex
              color="gray.300"
              align="center"
              justify="space-between"
              width="100%"
              py={2}
              px={5}
            >
              <Text fontSize="sm">{itemsLeft}</Text>
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
                <Text fontSize="sm">Clear Completed</Text>
              </Button>
            </Flex>
          </Stack>
          <Box
            bg={backGroundValue}
            mt={4}
            py={2}
            rounded="md"
            width="100%"
            boxShadow="2xl"
          >
            <TaskStatusMobile />
          </Box>
        </>
      )}
    </>
  );
}
