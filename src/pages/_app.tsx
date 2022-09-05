import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import { TasksProvider } from "../hooks/useTasks";
import { theme } from "../styles/theme";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <TasksProvider>
        <Component {...pageProps} />
      </TasksProvider>
    </ChakraProvider>
  );
}

export default MyApp;
