import { useState, useMemo } from "react";
import "./App.css";

import NavBar from "./components/NavBar.jsx";
// import DataGrid from "./DataGrid"
import {
  Button,
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import GridBox from "./components/GridBox";
import { ColorModeContext } from "./ColorModeContext";


function App() {
  // Automatic color swich setting
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState('light');


  
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );  
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          // mode: prefersDarkMode ? "dark" : "light",
          mode,
        },
      }),
    // [prefersDarkMode]
    [mode]
  );

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar color={ColorModeContext} />
          {/* <nav>
            <Link to="/sciconnect/">Home</Link>
            {" | "}
            <Link to="/sciconnect/About">About</Link>
          </nav> */}
          <Outlet />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
