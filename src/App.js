import "./App.css";
import { createTheme, makeStyles, ThemeProvider } from "@material-ui/core";
import Header from "./home/header";
import * as React from "react";
import Hero from "./home/hero";
import NewsSection from "./home/newsSection";
import RecentsSection from "./home/RecentsSection";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1A752C",
      light: "#9BB99E",
      dark: "#77A377",
    },
    secondary: {
      light: "#FFDFBA",
      main: "#F6EDD9",
      dark: "#B8AA87",
    },
    warning: {
      main: "#FD8B7C",
    },
    info: {
      light: "#F1F1EE",
      main: "#F1F1EE",
      dark: "#F1F1E8",
    },
    background: {
      grey: "#F1F1EE",
    },
  },
  typography: {
    h1: {
      fontSize: 36,
      fontWeight: 700,
      lineHeight: "42,19px",
    },
    h2: {
      fontSize: 22,
      fontWeight: 400,
      lineHeight: "25,78px",
    },
    subtitle1: {
      fontSize: 18,
      fontWeight: 500,
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
    },
    caption: {
      fontWeight: 200,
      fontSize: 14,
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#F1F1EE",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Header />
          <Hero />
          <NewsSection />
          <RecentsSection />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
