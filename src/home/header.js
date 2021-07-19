import { IconButton, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import BurgerMenu from "../icons/BurgerMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.dark,
    padding: theme.spacing(4),
  },
  headerTextColor: {
    color: theme.palette.secondary.light,
  },
  menuItems: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
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
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.menu}>
        <Typography variant='h1' className={classes.headerTextColor}>
          Stickling
        </Typography>
        <div className={classes.menuItems}>
          <Typography variant='h2' className={classes.headerTextColor}>
            Hem
          </Typography>
          <Typography variant='h2' className={classes.headerTextColor}>
            Om oss
          </Typography>
          <Typography variant='h2' className={classes.headerTextColor}>
            Köp och Sälj
          </Typography>
          <Typography variant='h2' className={classes.headerTextColor}>
            Logga in
          </Typography>
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
