import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import type { JSX } from "react";
import type React from "react";

type ThemeProp = {
  children: JSX.Element | JSX.Element[];
};

export const themePalette = {
  BG: "#12181b",
  Lime: "#C8FA5F",
  Font_Global: "'Montserrat', sans-serif",
  //ont_Heading: "'Poppins', sans-serif",
};

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: themePalette.BG,
    },
    primary: {
      main: themePalette.Lime,
    },
  },
  typography: {
    fontFamily: themePalette.Font_Global,
  },
  components: {
    MuiButton: {},
  },
});

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
