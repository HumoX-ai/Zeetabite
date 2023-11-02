import { Container, CssBaseline, Typography } from "@mui/material";
import { Header, Hero, Layout } from "./components";
import { useState } from "react";
import { darkTheme, lightTheme } from "./components/theme";
import { ThemeProvider } from "@emotion/react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Layout>
        <Container maxWidth="xl">
          <Hero isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </Container>
      </Layout>
      <Typography>Footer</Typography>
    </ThemeProvider>
  );
}

export default App;
