import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

function App() {
  const [dark, setDark] = useState(false);
  const theme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <ButtonGroup color="secondary" aria-label="medium secondary button group">
        <Button key="Dark" onClick={() => setDark(!dark)}>
          Mode
        </Button>
      </ButtonGroup>
      <Paper elevation={3}>
        <Typography variant="h2">THIS NEED TO WORK</Typography>{" "}
      </Paper>
    </ThemeProvider>
  );
}

export default App;
