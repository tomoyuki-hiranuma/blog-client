import { extendTheme } from "@chakra-ui/react";

export const theme = {
  colors: {
    body_black: "#666A71",
    gray: "#C4C4C4",
    white: "#FFFFFF",
    primary: "#60869C"
  }
};

export const chakraTheme = extendTheme({
  styles: {
    global: {
      body: {
        color: theme.colors.body_black
      }
    }
  }
});