import { FormEvent, useState } from "react";

import {
  Checkbox,
  Flex,
  FormControl,
  Input as ChakraInput,
  useColorModeValue,
} from "@chakra-ui/react";

import { useTasks } from "../../hooks/useTasks";

export function FormInput() {
  const [description, setDescription] = useState("");

  const { createTask } = useTasks();

  const backGroundValue = useColorModeValue("gray.50", "gray.800");
  const inputColor = useColorModeValue("gray.800", "gray.100");

  async function handleNewTask(event: FormEvent) {
    event.preventDefault();

    await createTask({
      description,
      isCompleted: false,
    });

    setDescription("");
  }

  return (
    <form onSubmit={handleNewTask} style={{ width: "100%" }}>
      <FormControl>
        <Flex mt={[6, 8]} padding={5} gap={4} rounded="md" bg={backGroundValue}>
          <Checkbox isDisabled size="lg" />
          <ChakraInput
            fontSize={["sm", "lg"]}
            color={inputColor}
            variant="unstyled"
            placeholder="Create a new todo..."
            _placeholder={{ color: "gray.300" }}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Flex>
      </FormControl>
    </form>
  );
}
