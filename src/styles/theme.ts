import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  useSystemColorMode: false,
  colors: {
    gray: {
      "900": "hsl(235, 21%, 11%)",
      "800": "hsl(235, 24%, 19%)",
      "700": "hsl(237, 14%, 26%)",
      "600": "hsl(235, 19%, 35%)",
      "500": "hsl(233, 14%, 35%)",
      "400": "hsl(234, 11%, 52%)",
      "300": "hsl(236, 9%, 61%)",
      "200": "hsl(234, 39%, 85%)",
      "100": "hsl(236, 33%, 92%)",
      "50": "hsl(0, 0%, 98%)",
    },
    blue: {
      "500": "hsl(220, 98%, 61%)",
    },
    gradientBlue: { "500": "hsl(192, 100%, 67%)" },
    gradientPurple: { "500": "hsl(280, 87%, 65%)" },
  },
  fonts: {
    heading: "Josefin Sans",
    body: "Josefin Sans",
  },
  styles: {
    global: {
      bg: "gray.900",
      color: "gray.50",
    },
  },
  sizes: {
    desktop: "1440px",
    mobile: "375px",
  },
  components: {
    Checkbox: {
      baseStyle: {
        icon: {
          color: "white",
          fontSize: "0.5rem",
          src: "/images/icon-check",
        },
        control: {
          border: "1px",
          borderColor: "gray.400",
          borderRadius: "50%",
          _disabled: {
            borderColor: "gray.300",
            bg: "transparent",
          },
          _checked: {
            bgGradient: "linear(to-r, gradientBlue.500, gradientPurple.500)",
            borderColor: "linear(to-r, gradientBlue.500, gradientPurple.500)",
          },
          _hover: {
            borderColor: "linear(to-r, gradientBlue.500, gradientPurple.500)",
          },
        },
      },
    },
  },
});
