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
      },
      h3: {
        fontSize: "2.17em",
        fontWeight: "bold",
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
      },
      h4: {
        fontSize: "1.8em",
        fontWeight: "bold",
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
      },
      h5: {
        fontsize: "1.5em",
        fontWeight: "bold",
        marginTop: "0.2rem",
        marginBottom: "0.2rem",
      },
      h6: {
        fontsize: "1.17em",
        fontWeight: "bold",
        marginTop: "0.2rem",
        marginBottom: "0.2rem",
      }
    }
  }
});