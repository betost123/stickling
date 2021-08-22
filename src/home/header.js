import { Button, IconButton, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import BurgerMenu from "../icons/BurgerMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.dark,
    padding: theme.spacing(4),
  },
  headerTextColor: {
    color: theme.palette.common.white,
  },
  menuItems: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    alignItems: "center",
  },
  burger: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  menu: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  indicator: {
    height: 6,
    background: theme.palette.primary.light,
    width: 108,
    marginTop: "0.5rem",
  },
  menuItemContainer: {
    display: "flex",
    flexDirection: "column",
    width: 108,
    textAlign: "center",
  },
  logInButton: {
    background: theme.palette.primary.main,
    borderRadius: 24,
    padding: theme.spacing(2),
    height: 64,
    width: 193,
    color: theme.palette.common.white,
  },
}));

const MenuItem = ({ title, onClick, selected }) => {
  const classes = useStyles();

  return (
    <div className={classes.menuItemContainer}>
      <Typography variant='h2' className={classes.headerTextColor}>
        {title}
      </Typography>
      {selected === title && <div className={classes.indicator} />}
    </div>
  );
};

const LogInButton = ({ onClick }) => {
  const classes = useStyles();

  return (
    <Button className={classes.logInButton} onClick={onClick}>
      Logga in
    </Button>
  );
};

const Header = ({ onClickLogIn }) => {
  const classes = useStyles();
  const menuItems = ["Hem", "Annonser", "Om oss", "Kontakt"];

  const selected = "Om oss";

  return (
    <div className={classes.root}>
      <div className={classes.menu}>
        <Typography variant='h1' className={classes.headerTextColor}>
          Stickling
        </Typography>
        <div className={classes.menuItems}>
          {menuItems.map((menuItem) => (
            <MenuItem title={menuItem} selected={selected} />
          ))}
          <LogInButton onClick={onClickLogIn} />
        </div>
        <div className={classes.burger}>
          <IconButton>
            <BurgerMenu />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
