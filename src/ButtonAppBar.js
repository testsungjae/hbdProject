import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e2b9ff",
    },
  },
});

export default function ButtonAppBar() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppBar position="static" color="primary">
          <Toolbar sx={{ textAlign: "center" }}>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{
                color: "white",
                textShadow:
                  "-1px 0px #6937a1, 0px 1px #6937a1, 1px 0px #6937a1, 0px -1px #6937a1",
                  fontSize:"25px"
              }}
            >
              Happy Heijin's Day
            </Typography>
            <Typography variant="subtitle1" component="div" sx={{ ml: 1, fontSize:"30px" }}>
              🎂 
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
