// themes.ts

import { createTheme } from "@mui/material/styles";

// Dark Theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
    },
    h2: {
      fontSize: "1.5rem",
      "@media (min-width:600px)": {
        fontSize: "2.5rem",
      },
    },
    h3: {
      fontSize: "1.25rem",
      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
    },
    h5: {
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
    },
  },
});

// Light Theme
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000",
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
    },
    h2: {
      fontSize: "1.5rem",
      "@media (min-width:600px)": {
        fontSize: "2.5rem",
      },
    },
    h3: {
      fontSize: "1.25rem",
      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
    },
    h5: {
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
    },
  },
});
