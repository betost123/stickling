import "./App.css";
import { createTheme, makeStyles, ThemeProvider } from "@material-ui/core";
import Header from "./home/header";
import * as React from "react";
import Hero from "./home/hero";
import RecentsSection from "./home/RecentsSection";
import Contact from "./home/Contact";
import LogInModal from "./home/components/LogInModal";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1A752C",
      light: "#DAF9D9",
      dark: "#77A377",
    },
    secondary: {
      light: "#FFDFBA",
      main: "#F6EDD9",
      dark: "#B8AA87",
    },
    warning: {
      main: "#FD8B7C",
      light: "#FC8C78",
    },
    info: {
      light: "#F1F1EE",
      main: "#F1F1EE",
      dark: "#F1F1E8",
      text: "#A1AFA0",
    },
    background: {
      grey: "#F1F1EE",
    },
    common: {
      white: "#FFFFFF",
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
    overline: {
      fontWeight: 300,
      fontSize: 14,
      letterSpacing: "0.1em",
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
  const [logInModalOpen, setLogInModalOpen] = React.useState(false);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Header onClickLogIn={() => setLogInModalOpen(true)} />
          <Hero />
          {/*<NewsSection />*/}
          <RecentsSection />
          <Contact />
          <LogInModal
            isOpen={logInModalOpen}
            handleClose={() => setLogInModalOpen(false)}
          />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
