import { extendTheme } from "@chakra-ui/react";

export const theme = {
  colors: {
    body_black: "#666A71",
    gray: "#C4C4C4",
    white: "#FFFFFF",
    primary: "#4e6d80"
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