import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    powderWhite: "#FFFDF9",
    persianGreen: "#06B49A",
    lightBlue: "#AFDBD2",
    onyx: "#36313D",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};
interface props {
  children: React.ReactNode;
}
const Theme = ({ children }: props) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
