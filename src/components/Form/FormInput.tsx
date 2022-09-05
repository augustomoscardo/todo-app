import { FormEvent, useState } from "react";

import {
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
        <ChakraInput
          placeholder="Create a new todo..."
          mt={8}
          bg={backGroundValue}
          padding={4}
          color={inputColor}
          variant="unstyled"
          _placeholder={{ color: "gray.300" }}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </FormControl>
    </form>
  );
}
