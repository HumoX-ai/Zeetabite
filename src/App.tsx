import { Container, CssBaseline } from "@mui/material";
import { Footer, Header, Hero, Layout } from "./components";
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
      <Container maxWidth="xl">
        <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
